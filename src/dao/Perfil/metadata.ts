import { IMetadata } from '../../utils/interfaces/general';
import { IPerfilAssociations, IPerfilColumnsAliases } from './interface';

export const PERFIL: IMetadata<IPerfilColumnsAliases, IPerfilAssociations> = {
   TABLE: 'perfil',
   COLUMNS: {
      ID: 'id',
      DESCRIPCION: 'descripcion',
      ESTADO: 'estado',
   },
   PLURAL: 'Perfiles',
   SINGULAR: 'Perfil',
   ASSOCIATIONS: {
      PERMISOS: 'Permisos',
      USUARIOS: 'Usuarios',
   },
};
