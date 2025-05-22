import { ISuscripcion } from '../interfaces';

export type ISocioSuscripcion = {
   id?: number;
   socio_id: number;
   suscripcion_id: number;
   importe: number;
   vigencia_desde: Date;
   vigencia_hasta: Date;
   estado: string;

   // relaciones
   Suscripcion?: ISuscripcion;
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

type SocioSuscripcionAssociationsKeys = 'SUSCRIPCION';

export type ISocioSuscripcionAssociations = {
   [key in SocioSuscripcionAssociationsKeys]: keyof ISocioSuscripcion;
};
