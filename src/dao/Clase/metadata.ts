import { IMetadata } from '../../utils/interfaces/general';
import { IClaseAssociations, IClaseColumnsAliases } from './interface';

export const CLASE: IMetadata<IClaseColumnsAliases, IClaseAssociations> = {
   TABLE: 'clase',
   COLUMNS: {
      ID: 'id',
      NOMBRE: 'nombre',
      DESCRIPCION: 'descripcion',
   },
   PLURAL: 'Clases',
   SINGULAR: 'Clase',
   ASSOCIATIONS: {
      HORARIOS: 'Horarios',
   },
};
