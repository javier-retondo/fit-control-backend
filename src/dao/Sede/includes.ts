import { CLASE, HORARIO_CLASE, HORARIO_SEDE, USUARIO } from '../metadata';
import { ISedeAssociations } from './interface';
import { SEDE } from './metadata';

export const sedeIncludes: {
   as: ISedeAssociations[keyof ISedeAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: SEDE.ASSOCIATIONS.HORARIOS,
      attributes: [
         HORARIO_SEDE.COLUMNS.ID,
         HORARIO_SEDE.COLUMNS.DIA_SEMANA,
         HORARIO_SEDE.COLUMNS.HORARIO,
      ],
   },
   {
      as: SEDE.ASSOCIATIONS.CLASES,
      attributes: [
         HORARIO_CLASE.COLUMNS.ID,
         HORARIO_CLASE.COLUMNS.DIA_SEMANA,
         HORARIO_CLASE.COLUMNS.HORARIO,
         HORARIO_CLASE.COLUMNS.INSTRUCTOR_ID,
         HORARIO_CLASE.COLUMNS.CLASE_ID,
      ],
      include: [
         {
            as: HORARIO_CLASE.ASSOCIATIONS.CLASE,
            attributes: [CLASE.COLUMNS.ID, CLASE.COLUMNS.NOMBRE],
         },
         {
            as: HORARIO_CLASE.ASSOCIATIONS.INSTRUCTOR,
            attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
         },
      ],
   },
];
