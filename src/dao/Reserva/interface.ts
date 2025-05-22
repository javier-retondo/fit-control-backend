import { IHorarioClase, IUsuario } from '../interfaces';

export type IReserva = {
   id?: number;
   clase_programada_id: number;
   socio_id: number;
   fecha: Date;

   // Relaciones
   Horario?: IHorarioClase;
   Socio?: IUsuario;
};

type ReservaColumnAliasKeys = 'ID' | 'HORARIO_CLASE_ID' | 'SOCIO_ID' | 'FECHA';
export type IReservaColumnsAliases = {
   [key in ReservaColumnAliasKeys]: keyof IReserva;
};

type ReservaAssociationsKeys = 'HORARIO' | 'SOCIO';

export type IReservaAssociations = {
   [key in ReservaAssociationsKeys]: keyof IReserva;
};
