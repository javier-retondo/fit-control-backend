import { SUSCRIPCION } from '../metadata';
import { ISocioSuscripcionAssociations } from './interface';
import { SOCIO_SUSCRIPCION } from './metadata';

export const sociosuscripcionIncludes: {
   as: ISocioSuscripcionAssociations[keyof ISocioSuscripcionAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: SOCIO_SUSCRIPCION.ASSOCIATIONS.SUSCRIPCION,
      attributes: [
         SUSCRIPCION.COLUMNS.ID,
         SUSCRIPCION.COLUMNS.NOMBRE,
         SUSCRIPCION.COLUMNS.DESCRIPCION,
      ],
   },
];
