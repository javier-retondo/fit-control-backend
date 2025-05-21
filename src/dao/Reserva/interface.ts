export type IReserva = {
   id?: number;
   clase_programada_id: number;
   socio_id: number;
   fecha: Date;
};

type ReservaColumnAliasKeys = 'ID' | 'HORARIO_CLASE_ID' | 'SOCIO_ID' | 'FECHA';
export type IReservaColumnsAliases = {
   [key in ReservaColumnAliasKeys]: keyof IReserva;
};

export type IReservaAssociations = object;
