import { WhereOptions } from 'sequelize';
import { PERFIL } from '../../metadata';
import { redisClient } from '../../../config/redisManager';
import { Op } from 'sequelize';
import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { ESTADOS } from '../../../utils/constants/SYSTEM_ENUMS';

type pagination = {
   page: number;
   pageSize: number;
   order: {
      column: keyof IPerfil;
      direction: 'ASC' | 'DESC';
   }[];
};

type filter = Partial<{
   id: number[];
   search: string;
   estados: ESTADOS[];
}>;

class PerfilesFinder {
   private cacheKey = 'perfilesFinder';

   async findAll(
      filter?: filter,
      pagination?: pagination,
      includes?: (keyof IPerfil)[],
      cache?: boolean,
      count?: boolean,
   ): Promise<{ rows: IPerfil[]; count: number }> {
      const { page, pageSize, order } = pagination || {
         page: 1,
         pageSize: 10000,
         order: [
            {
               column: PERFIL.COLUMNS.ID,
               direction: 'ASC',
            },
         ],
      };
      const cacheKey = cache
         ? `${this.cacheKey}:${JSON.stringify(filter)}:${JSON.stringify(
              pagination,
           )}:${JSON.stringify(includes)}`
         : '';

      const cachedData = cache && (await redisClient.get(cacheKey));
      if (cachedData) {
         return JSON.parse(cachedData);
      }

      let where: WhereOptions<IPerfil> = {};
      if (filter) {
         if (filter.id) {
            where.id = {
               [Op.in]: filter.id,
            };
         }
         if (filter.search) {
            where = {
               ...where,
               descripcion: { [Op.like]: `%${filter.search}%` },
            };
         }
         if (filter.estados) {
            where.estado = {
               [Op.in]: filter.estados,
            };
         }
      }

      const orderBy: [string, 'ASC' | 'DESC'][] = order
         ? order.map((ord) => [ord.column as string, ord.direction])
         : [[PERFIL.COLUMNS.ID as string, 'ASC']];

      const limit = pageSize || 1000;

      const offset = (page - 1) * limit;

      const perfiles = !count
         ? await Perfil.findAll({
              where,
              limit,
              offset,
              order: orderBy,
              include: includes,
              raw: true,
              nest: true,
           }).then((data) => data.map((perfil) => perfil.toJSON()))
         : [];

      const perfilesCount = await Perfil.count({
         where,
         include: includes,
      });

      if (cache) {
         await redisClient.set(cacheKey, JSON.stringify({ rows: perfiles, count }), 60 * 2);
      }

      return {
         rows: perfiles,
         count: perfilesCount,
      };
   }
}

export const perfilesFinder = new PerfilesFinder();
