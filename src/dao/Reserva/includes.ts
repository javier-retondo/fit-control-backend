import { HORARIO_CLASE, USUARIO } from '../metadata';
import { IReservaAssociations } from './interface';
import { RESERVA } from './metadata';

export const reservaIncludes: {
   as: IReservaAssociations[keyof IReservaAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: RESERVA.ASSOCIATIONS.SOCIO,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
   {
      as: RESERVA.ASSOCIATIONS.HORARIO,
      attributes: [
         HORARIO_CLASE.COLUMNS.ID,
         HORARIO_CLASE.COLUMNS.DIA_SEMANA,
         HORARIO_CLASE.COLUMNS.HORARIO,
         HORARIO_CLASE.COLUMNS.INSTRUCTOR_ID,
      ],
   },
];
