import { USUARIO } from '../metadata';
import { IMensajeAssociations } from './interface';
import { MENSAJE } from './metadata';

export const mensajeIncludes: {
   as: IMensajeAssociations[keyof IMensajeAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: MENSAJE.ASSOCIATIONS.USUARIO_REMITENTE,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
   {
      as: MENSAJE.ASSOCIATIONS.USUARIO_DESTINATARIO,
      attributes: [USUARIO.COLUMNS.ID, USUARIO.COLUMNS.NOMBRE, USUARIO.COLUMNS.APELLIDO],
   },
];
