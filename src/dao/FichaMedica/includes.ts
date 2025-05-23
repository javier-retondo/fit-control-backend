import { USUARIO } from '../metadata';
import { IFichaMedicaAssociations } from './interface';
import { FICHA_MEDICA } from './metadata';

export const fichamedicaIncludes: {
   as: IFichaMedicaAssociations[keyof IFichaMedicaAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: FICHA_MEDICA.ASSOCIATIONS.SOCIO,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
   {
      as: FICHA_MEDICA.ASSOCIATIONS.UPDATED_BY,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
];
