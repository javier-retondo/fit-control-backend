export type ISocioSuscripcion = {
   id?: number;
   socio_id: number;
   suscripcion_id: number;
   importe: number;

   estado: string;
};

type SocioSuscripcionColumnAliasKeys =
   | 'ID'
   | 'SOCIO_ID'
   | 'SUSCRIPCION_ID'
   | 'IMPORTE'
   | 'VIGENCIA_DESDE'
   | 'VIGENCIA_HASTA'
   | 'ESTADO';
export type ISocioSuscripcionColumnsAliases = {
   [key in SocioSuscripcionColumnAliasKeys]: keyof ISocioSuscripcion;
};

export type ISocioSuscripcionAssociations = object;
