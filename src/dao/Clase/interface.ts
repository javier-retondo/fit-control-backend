import { IHorarioClase } from '../interfaces';

export type IClase = {
   id?: number;
   nombre: string;
   descripcion: string;

   // relaciones
   Horarios?: IHorarioClase[];
};

type ClaseColumnAliasKeys = 'ID' | 'NOMBRE' | 'DESCRIPCION';
export type IClaseColumnsAliases = {
   [key in ClaseColumnAliasKeys]: keyof IClase;
};

type ClaseAssociationsKeys = 'HORARIOS';

export type IClaseAssociations = {
   [key in ClaseAssociationsKeys]: keyof IClase;
};
