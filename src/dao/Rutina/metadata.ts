import { IMetadata } from '../../utils/interfaces/general';
import { IRutinaAssociations, IRutinaColumnsAliases } from './interface';

export const RUTINA: IMetadata<IRutinaColumnsAliases, IRutinaAssociations> = {
   TABLE: 'rutina',
   COLUMNS: {
      ID: 'id',
      SOCIO_ID: 'socio_id',
      DIA_SEMANA: 'dia_semana',
      NOMBRE: 'nombre',
      OBJETIVO: 'objetivo',
      OBSERVACIONES: 'observaciones',
   },
   PLURAL: 'Rutinas',
   SINGULAR: 'Rutina',
   ASSOCIATIONS: {
      SOCIO: 'Socio',
      EJERCICIOS: 'Ejercicios',
   },
};
