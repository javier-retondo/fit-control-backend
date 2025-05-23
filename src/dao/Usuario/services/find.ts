import { Includeable, WhereOptions } from 'sequelize';
import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { USUARIO } from '../metadata';
import { redisClient } from '../../../config/redisManager';
import { Op } from 'sequelize';
import { getIncludes, pagination, paginationHelper } from '../../../utils/functions/finderUtils';
import { createUserInclude, UsuarioIncludes } from '../includes';
import { SUSCRIPCION } from '../../metadata';
import { Suscripcion } from '../../models';
import { ISuscripcion } from '../../interfaces';

type filter = Partial<{
   id: number[];
   search: string;
   perfil_id: number[];
   suscripcion_id: number[];
   superadmin: boolean;
}>;

class UsuariosFinder {
   private cacheKey = 'usuariosFinder';

   async findAll(
      filter?: filter,
      pagination?: pagination<IUsuario>,
      includes?: (keyof IUsuario)[],
      cache?: boolean,
      count?: boolean,
   ): Promise<{ rows: IUsuario[]; count: number }> {
      const cacheKey = cache
         ? `${this.cacheKey}:${JSON.stringify(filter)}:${JSON.stringify(pagination)}:${JSON.stringify(includes)}`
         : '';

      const cachedData = cache && (await redisClient.get(cacheKey));
      if (cachedData) return JSON.parse(cachedData);

      const { include, attributes } = getIncludes<IUsuario>(
         includes,
         UsuarioIncludes,
         USUARIO.COLUMNS,
      );

      let hasManyInclude: Includeable[] = [];
      let where: WhereOptions<IUsuario> = {};

      if (filter) {
         if (filter.id) {
            where.id = {
               [Op.in]: filter.id,
            };
         }
         if (filter.perfil_id) {
            where.perfil_id = {
               [Op.in]: filter.perfil_id,
            };
         }
         if (filter.search) {
            where = {
               ...where,
               [Op.or]: [
                  { nombre: { [Op.like]: `%${filter.search}%` } },
                  { apellido: { [Op.like]: `%${filter.search}%` } },
                  { email: { [Op.like]: `%${filter.search}%` } },
                  { telefono: { [Op.like]: `%${filter.search}%` } },
                  { avatar_url: { [Op.like]: `%${filter.search}%` } },
               ],
            };
         }
         if (filter.superadmin !== undefined) {
            where = {
               ...where,
               superadmin: filter.superadmin,
            };
         }
         if (filter.suscripcion_id) {
            where = {
               ...where,
               [`$${USUARIO.ASSOCIATIONS.SUSCRIPCIONES}.${SUSCRIPCION.COLUMNS.ID}$`]: {
                  [Op.in]: filter.suscripcion_id,
               },
            };

            hasManyInclude = [
               ...hasManyInclude,
               createUserInclude<Suscripcion, ISuscripcion>(
                  Suscripcion,
                  'SUSCRIPCIONES',
                  [],
                  undefined,
                  true,
               ),
            ];
         }
      }

      const { limit, offset, order } = paginationHelper<IUsuario>(
         pagination ?? { sort: [{ column: USUARIO.COLUMNS.ID, direction: 'ASC' }] },
      );

      let filterByIds: number[] | undefined;

      if (hasManyInclude.length > 0) {
         const usuariosIds = await Usuario.findAll({
            attributes: [USUARIO.COLUMNS.ID],
            where,
            limit,
            offset,
            order,
            include: hasManyInclude,
            raw: true,
         });

         if (usuariosIds.length === 0) return { rows: [], count: 0 };

         filterByIds = usuariosIds.map((u: any) => u.id);
      }

      const finalWhere: WhereOptions<IUsuario> =
         filterByIds !== undefined ? { id: filterByIds } : where;

      const usuarios = !count
         ? await Usuario.findAll({
              attributes,
              where: finalWhere,
              limit,
              offset,
              order,
              include: [...include, ...hasManyInclude],
              raw: false,
              nest: true,
           }).then((data) => data.map((u) => u.toJSON()))
         : [];

      const usuariosCount =
         pagination || count
            ? await Usuario.count({
                 where: finalWhere,
                 include: [...include, ...hasManyInclude],
              })
            : usuarios.length;

      if (cache) {
         await redisClient.set(
            cacheKey,
            JSON.stringify({ rows: usuarios, count: usuariosCount }),
            60 * 2,
         );
      }

      return { rows: usuarios, count: usuariosCount };
   }
}

export const usuariosFinder = new UsuariosFinder();
