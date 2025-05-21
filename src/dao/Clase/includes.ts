import { HORARIO_CLASE } from '../metadata';
import { IClaseAssociations } from './interface';
import { CLASE } from './metadata';

export const claseIncludes: {
   as: IClaseAssociations[keyof IClaseAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: CLASE.ASSOCIATIONS.HORARIOS,
      attributes: [
         HORARIO_CLASE.COLUMNS.ID,
         HORARIO_CLASE.COLUMNS.DIA_SEMANA,
         HORARIO_CLASE.COLUMNS.HORARIO,
         HORARIO_CLASE.COLUMNS.INSTRUCTOR_ID,
      ],
   },
];
