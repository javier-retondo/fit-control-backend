import { IClase, ISede } from '../interfaces';
import { Reserva } from '../models';

export type IHorarioClase = {
   id?: number;
   clase_id: number;
   instructor_id: number;
   dia_semana: string;
   horario: Date;
   sede_id: number;

   // relaciones
   Clase?: IClase;
   Sede?: ISede;
   Reservas?: Reserva[];
};

type HorarioClaseColumnAliasKeys =
   | 'ID'
   | 'CLASE_ID'
   | 'INSTRUCTOR_ID'
   | 'DIA_SEMANA'
   | 'HORARIO'
   | 'SEDE_ID';
export type IHorarioClaseColumnsAliases = {
   [key in HorarioClaseColumnAliasKeys]: keyof IHorarioClase;
};

export type HorarioClaseAssociationsKeys = 'CLASE' | 'SEDE' | 'RESERVAS';

export type IHorarioClaseAssociations = {
   [key in HorarioClaseAssociationsKeys]: keyof IHorarioClase;
};
