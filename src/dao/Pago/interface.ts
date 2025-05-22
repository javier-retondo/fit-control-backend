import { IMedioPago, ISocioSuscripcion } from '../interfaces';

export type IPago = {
   id?: number;
   suscripcion_socio_id: number;
   monto: number;
   fecha: Date;
   medio_pago_id: number;

   // relaciones
   MedioPago?: IMedioPago;
   SuscripcionSocio?: ISocioSuscripcion;
};

type PagoColumnAliasKeys = 'ID' | 'SUSCRIPCION_SOCIO_ID' | 'MONTO' | 'FECHA' | 'MEDIO_PAGO_ID';

export type IPagoColumnsAliases = {
   [key in PagoColumnAliasKeys]: keyof IPago;
};

type PagoAssociationsKeys = 'MEDIO_PAGO' | 'SUSCRIPCION_SOCIO';

export type IPagoAssociations = {
   [key in PagoAssociationsKeys]: keyof IPago;
};
