import { IMetadata } from '../../utils/interfaces/general';
import { ISedeAssociations, ISedeColumnsAliases } from './interface';

export const SEDE: IMetadata<ISedeColumnsAliases, ISedeAssociations> = {
   TABLE: 'sede',
   COLUMNS: {
      ID: 'id',
      NOMBRE: 'nombre',
      DESCRIPCION: 'descripcion',
      ESTADO: 'estado',
   },
   PLURAL: 'Sedes',
   SINGULAR: 'Sede',
   ASSOCIATIONS: {
      HORARIOS: 'Horarios',
      CLASES: 'Clases',
   },
};
