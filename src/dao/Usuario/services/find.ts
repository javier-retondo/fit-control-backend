import { WhereOptions } from 'sequelize';
import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { USUARIO } from '../metadata';
import { redisClient } from '../../../config/redisManager';
import { Op } from 'sequelize';

type pagination = {
   page: number;
   pageSize: number;
   order: {
      column: keyof IUsuario;
      direction: 'ASC' | 'DESC';
   }[];
};

type filter = Partial<{
   id: number[];
   search: string;
   perfil_id: number[];
}>;

class UsuariosFinder {
   private cacheKey = 'usuariosFinder';

   async findById(id: number) {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
         throw new Error('Usuario not found');
      }
      return usuario;
   }

   async findAll(
      filter?: filter,
      pagination?: pagination,
      includes?: (keyof IUsuario)[],
      cache?: boolean,
   ) {
      const { page, pageSize, order } = pagination || {
         page: 1,
         pageSize: 1000,
         order: [
            {
               column: USUARIO.COLUMNS.ID,
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
      }

      const orderBy: [string, 'ASC' | 'DESC'][] = order
         ? order.map((ord) => [ord.column as string, ord.direction])
         : [[USUARIO.COLUMNS.ID as string, 'ASC']];

      const limit = pageSize || 1000;

      const offset = (page - 1) * limit;

      const usuarios = await Usuario.findAll({
         where,
         limit,
         offset,
         order: orderBy,
         include: includes,
      });
      return usuarios;
   }
}

export const usuariosFinder = new UsuariosFinder();
