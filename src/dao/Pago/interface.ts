export type IPago = {
   id?: number;
   suscripcion_socio_id: number;
   monto: number;
   fecha: Date;
   medio_pago_id: number;
};

type PagoColumnAliasKeys = 'ID' | 'SUSCRIPCION_SOCIO_ID' | 'MONTO' | 'FECHA' | 'MEDIO_PAGO_ID';
export type IPagoColumnsAliases = {
   [key in PagoColumnAliasKeys]: keyof IPago;
};

export type IPagoAssociations = object;
