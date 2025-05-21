import { USUARIO } from '../metadata';
import { INotificacionAssociations } from './interface';
import { NOTIFICACION } from './metadata';

export const notificacionIncludes: {
   as: INotificacionAssociations[keyof INotificacionAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: NOTIFICACION.ASSOCIATIONS.USUARIO,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
];
