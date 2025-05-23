import { ConfigServer } from '../config';
import { IUsuario } from '../dao/interfaces';
import { PERFIL, USUARIO } from '../dao/metadata';
import { EPerfil, IPerfil } from '../dao/Perfil/interface';
import { perfilesCreator } from '../dao/Perfil/services/create';
import { perfilesFinder } from '../dao/Perfil/services/find';
import { usuariosCreator } from '../dao/Usuario/services/create';
import { usuariosFinder } from '../dao/Usuario/services/find';
import { ESTADOS } from '../utils/constants/SYSTEM_ENUMS';

class DefaultDataSeeder {
   async run() {}

   async superAdmin() {
      console.log('Creando superadmin...');
      const existingUser = await usuariosFinder
         .findAll(
            { superadmin: true },
            { page: 1, pageSize: 1, sort: [{ column: USUARIO.COLUMNS.ID, direction: 'ASC' }] },
            [USUARIO.COLUMNS.ID],
         )
         .then((data) => data.count > 0);
      if (existingUser) {
         console.log('Ya existe un superadmin en la base de datos');
         return;
      }

      if (!ConfigServer.prototype.superAdminData) {
         console.log('No se ha configurado el superadmin en el archivo de configuración');
         return;
      }
      (
         Object.keys(ConfigServer.prototype.superAdminData) as Array<
            keyof typeof ConfigServer.prototype.superAdminData
         >
      ).forEach((key) => {
         if (ConfigServer.prototype.superAdminData[key] === undefined) {
            console.log(`La propiedad ${key} no está definida en el superadmin`);
            return;
         }
         if (ConfigServer.prototype.superAdminData[key] === null) {
            console.log(`La propiedad ${key} está definida como null en el superadmin`);
            return;
         }
         if (ConfigServer.prototype.superAdminData[key] === '') {
            console.log(`La propiedad ${key} está definida como vacío en el superadmin`);
            return;
         }
      });
      const superAdminData: IUsuario = {
         ...ConfigServer.prototype.superAdminData,
         pass_provisoria: false,
         superadmin: true,
      };
      await usuariosCreator
         .createEntities([superAdminData])
         .then(() => {
            console.log('Superadmin creado correctamente');
         })
         .catch((error) => {
            console.error('Error al crear el superadmin:', error);
         });
   }
   async perfilesDefault() {
      console.log('Creando perfiles por defecto...');
      const existingPerfiles = await perfilesFinder.findAll(
         { estados: [ESTADOS.ACTIVO] },
         undefined,
         [PERFIL.COLUMNS.ID],
         false,
         true,
      );
      const perfilesDefault: IPerfil[] = [
         {
            id: EPerfil.ADMINISTRADOR,
            descripcion: 'Administrador',
            estado: ESTADOS.ACTIVO,
         },
         {
            id: EPerfil.RECEPCIONISTA,
            descripcion: 'Recepcionista',
            estado: ESTADOS.ACTIVO,
         },
         {
            id: EPerfil.COORDINADOR,
            descripcion: 'Coordinador',
            estado: ESTADOS.ACTIVO,
         },
         {
            id: EPerfil.INSTRUCTOR,
            descripcion: 'Instructor',
            estado: ESTADOS.ACTIVO,
         },
         {
            id: EPerfil.SOCIO,
            descripcion: 'Socio',
            estado: ESTADOS.ACTIVO,
         },
      ];
      const perfilesToCreate = perfilesDefault.filter(
         (perfil) =>
            !existingPerfiles.rows.some((existingPerfil) => existingPerfil.id === perfil.id),
      );
      if (perfilesToCreate.length === 0) {
         console.log('Ya existen todos los perfiles por defecto en la base de datos');
         return;
      }
      await perfilesCreator
         .createEntities(perfilesToCreate)
         .then(() => {
            console.log('Perfiles creados correctamente');
         })
         .catch((error) => {
            console.error('Error al crear los perfiles:', error);
         });
   }
}

export const defaultDataSeeder = new DefaultDataSeeder();
