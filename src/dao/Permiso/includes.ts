import { MODULO, PERFIL } from '../metadata';
import { IPermisoAssociations } from './interface';
import { PERMISO } from './metadata';

export const permisoIncludes: {
   as: IPermisoAssociations[keyof IPermisoAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: PERMISO.ASSOCIATIONS.MODULO,
      attributes: [MODULO.COLUMNS.ID, MODULO.COLUMNS.NOMBRE],
   },
   {
      as: PERMISO.ASSOCIATIONS.PERFIL,
      attributes: [PERFIL.COLUMNS.ID, PERFIL.COLUMNS.DESCRIPCION],
   },
];
