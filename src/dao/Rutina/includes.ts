import { EJERCICIO, USUARIO } from '../metadata';
import { IRutinaAssociations } from './interface';
import { RUTINA } from './metadata';

export const rutinaIncludes: {
   as: IRutinaAssociations[keyof IRutinaAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: RUTINA.ASSOCIATIONS.EJERCICIOS,
      attributes: [
         EJERCICIO.COLUMNS.ID,
         EJERCICIO.COLUMNS.NOMBRE,
         EJERCICIO.COLUMNS.DESCRIPCION,
         EJERCICIO.COLUMNS.VIDEO_URL,
      ],
   },
   {
      as: RUTINA.ASSOCIATIONS.SOCIO,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
];
