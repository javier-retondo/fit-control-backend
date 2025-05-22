import { MEDIO_PAGO, SOCIO_SUSCRIPCION } from '../metadata';
import { IPagoAssociations } from './interface';
import { PAGO } from './metadata';

export const pagoIncludes: {
   as: IPagoAssociations[keyof IPagoAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [
   {
      as: PAGO.ASSOCIATIONS.MEDIO_PAGO,
      attributes: [MEDIO_PAGO.COLUMNS.ID, MEDIO_PAGO.COLUMNS.DESCRIPCION],
   },
   {
      as: PAGO.ASSOCIATIONS.SUSCRIPCION_SOCIO,
      attributes: [
         SOCIO_SUSCRIPCION.COLUMNS.ID,
         SOCIO_SUSCRIPCION.COLUMNS.SOCIO_ID,
         SOCIO_SUSCRIPCION.COLUMNS.SUSCRIPCION_ID,
      ],
   },
];
