import { IUsuario } from '../interfaces';

export type IFichaMedica = {
   id?: number;
   socio_id: number;
   grupo_sanguineo: string;
   factor: string;
   alergias: string;
   lesiones: string;
   medicacion: string;
   restricciones: string;
   observaciones: string;
   updated_at: Date;
   updated_by: number;

   // relaciones
   Socio?: IUsuario;
   UpdatedBy?: IUsuario;
};

type FichaMedicaColumnAliasKeys =
   | 'ID'
   | 'SOCIO_ID'
   | 'GRUPO'
   | 'FACTOR'
   | 'ALERGIAS'
   | 'LESIONES'
   | 'MEDICACION'
   | 'RESTRICCIONES'
   | 'OBSERVACIONES'
   | 'UPDATED_AT'
   | 'UPDATED_BY';
export type IFichaMedicaColumnsAliases = {
   [key in FichaMedicaColumnAliasKeys]: keyof IFichaMedica;
};

type FichaMedicaAssociationsKeys = 'SOCIO' | 'UPDATED_BY';

export type IFichaMedicaAssociations = {
   [key in FichaMedicaAssociationsKeys]: keyof IFichaMedica;
};
