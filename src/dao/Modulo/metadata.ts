import { IMetadata } from '../../utils/interfaces/general';
import { IModuloAssociations, IModuloColumnsAliases } from './interface';

export const MODULO: IMetadata<IModuloColumnsAliases, IModuloAssociations> = {
   TABLE: 'modulo',
   COLUMNS: {
      ID: 'id',
      NOMBRE: 'nombre',
   },
   PLURAL: 'Modulos',
   SINGULAR: 'Modulo',
   ASSOCIATIONS: {},
};
