import { IMetadata } from '../../utils/interfaces/general';
import { IFichaMedicaAssociations, IFichaMedicaColumnsAliases } from './interface';

export const FICHA_MEDICA: IMetadata<IFichaMedicaColumnsAliases, IFichaMedicaAssociations> = {
   TABLE: 'ficha_medica',
   COLUMNS: {
      ID: 'id',
      SOCIO_ID: 'socio_id',
      GRUPO: 'grupo_sanguineo',
      FACTOR: 'factor',
      ALERGIAS: 'alergias',
      LESIONES: 'lesiones',
      MEDICACION: 'medicacion',
      RESTRICCIONES: 'restricciones',
      OBSERVACIONES: 'observaciones',
      UPDATED_AT: 'updated_at',
      UPDATED_BY: 'updated_by',
   },
   PLURAL: 'FichasMedicas',
   SINGULAR: 'FichaMedica',
   ASSOCIATIONS: {
      SOCIO: 'Socio',
      UPDATED_BY: 'UpdatedBy',
   },
};
