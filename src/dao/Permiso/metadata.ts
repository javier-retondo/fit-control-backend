import { IMetadata } from '../../utils/interfaces/general';
import { IPermisoAssociations, IPermisoColumnsAliases } from './interface';

export const PERMISO: IMetadata<IPermisoColumnsAliases, IPermisoAssociations> = {
   TABLE: 'permiso',
   COLUMNS: {
      ID: 'id',
      MODULO_IS: 'modulo_id',
      PERFIL_ID: 'perfil_id',
   },
   PLURAL: 'Permisos',
   SINGULAR: 'Permiso',
   ASSOCIATIONS: {},
};
