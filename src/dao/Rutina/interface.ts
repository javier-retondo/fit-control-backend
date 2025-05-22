import { IEjercicio, IUsuario } from '../interfaces';

export type IRutina = {
   id?: number;
   socio_id: number;
   dia_semana: string;
   nombre: string;
   objetivo: string;
   observaciones: string;

   // relaciones
   Socio?: IUsuario;
   Ejercicios?: IEjercicio[];
};

type RutinaColumnAliasKeys =
   | 'ID'
   | 'SOCIO_ID'
   | 'DIA_SEMANA'
   | 'NOMBRE'
   | 'OBJETIVO'
   | 'OBSERVACIONES';
export type IRutinaColumnsAliases = {
   [key in RutinaColumnAliasKeys]: keyof IRutina;
};

type RutinaAssociationsKeys = 'SOCIO' | 'EJERCICIOS';

export type IRutinaAssociations = {
   [key in RutinaAssociationsKeys]: keyof IRutina;
};
