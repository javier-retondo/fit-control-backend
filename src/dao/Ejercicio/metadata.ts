import { IMetadata } from '../../utils/interfaces/general';
import { IEjercicioAssociations, IEjercicioColumnsAliases } from './interface';

export const EJERCICIO: IMetadata<IEjercicioColumnsAliases, IEjercicioAssociations> = {
   TABLE: 'ejercicio',
   COLUMNS: {
      ID: 'id',
      RUTINA_ID: 'rutina_id',
      NOMBRE: 'nombre',
      VIDEO_URL: 'video_url',
      DESCRIPCION: 'descripcion',
   },
   PLURAL: 'Ejercicios',
   SINGULAR: 'Ejercicio',
   ASSOCIATIONS: {},
};
