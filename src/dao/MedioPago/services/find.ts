import { FindAttributeOptions, Includeable, WhereOptions } from 'sequelize';
import { MEDIO_PAGO } from '../../metadata';
import { redisClient } from '../../../config/redisManager';
import { Op } from 'sequelize';
import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { ESTADOS } from '../../../utils/constants/SYSTEM_ENUMS';
import { paginationHelper } from '../../../utils/functions/finderUtils';

type pagination = {
   page: number;
   pageSize: number;
   sort: {
      column: keyof IMedioPago;
      direction: 'ASC' | 'DESC';
   }[];
};

type filter = Partial<{
   id: number[];
   search: string;
   estados: ESTADOS[];
}>;

class MediosPagosFinder {
   private cacheKey = 'mediosPagosFinder';

   async findAll(
      filter?: filter,
      pagination?: pagination,
      includes?: (keyof IMedioPago)[],
      cache?: boolean,
      count?: boolean,
   ): Promise<{ rows: IMedioPago[]; count: number }> {
      const cacheKey = cache
         ? `${this.cacheKey}:${JSON.stringify(filter)}:${JSON.stringify(
              pagination,
           )}:${JSON.stringify(includes)}`
         : '';

      const cachedData = cache && (await redisClient.get(cacheKey));
      if (cachedData) {
         return JSON.parse(cachedData);
      }

      const attributes: FindAttributeOptions = Object.values(MEDIO_PAGO.COLUMNS).filter(
         (column) => includes && includes.includes(column as keyof IMedioPago),
      );

      const include: Includeable[] = [];

      let where: WhereOptions<IMedioPago> = {};
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

      const { offset, limit, order } = paginationHelper<IMedioPago>(
         pagination ?? { sort: [{ column: MEDIO_PAGO.COLUMNS.ID, direction: 'ASC' }] },
      );

      const mediosPagos = !count
         ? await MedioPago.findAll({
              attributes,
              where,
              limit,
              offset,
              order,
              include,
              raw: true,
              nest: true,
           }).then((data) => data.map((perfil) => perfil.toJSON()))
         : [];

      const mediosPagosCount =
         pagination && !count
            ? await MedioPago.count({
                 where,
                 include,
              })
            : mediosPagos.length;

      if (cache) {
         await redisClient.set(
            cacheKey,
            JSON.stringify({ rows: mediosPagos, count: mediosPagosCount }),
            60 * 2,
         );
      }

      return {
         rows: mediosPagos,
         count: mediosPagosCount,
      };
   }
}

export const mediosPagosFinder = new MediosPagosFinder();
