import { CLASE, RESERVA, SEDE, USUARIO } from '../metadata';
import { IHorarioClaseAssociations } from './interface';
import { HORARIO_CLASE } from './metadata';

export const horarioclaseIncludes: {
   as: IHorarioClaseAssociations[keyof IHorarioClaseAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: HORARIO_CLASE.ASSOCIATIONS.CLASE,
      attributes: [CLASE.COLUMNS.ID, CLASE.COLUMNS.NOMBRE],
   },
   {
      as: HORARIO_CLASE.ASSOCIATIONS.SEDE,
      attributes: [SEDE.COLUMNS.ID, SEDE.COLUMNS.NOMBRE],
   },
   {
      as: HORARIO_CLASE.ASSOCIATIONS.RESERVAS,
      attributes: [
         RESERVA.COLUMNS.ID,
         RESERVA.COLUMNS.FECHA,
         RESERVA.COLUMNS.HORARIO_CLASE_ID,
         RESERVA.COLUMNS.SOCIO_ID,
      ],
   },
   {
      as: HORARIO_CLASE.ASSOCIATIONS.INSTRUCTOR,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
];
