export type IRutina = {
   id?: number;
   socio_id: number;
   dia_semana: string;
   nombre: string;
   objetivo: string;
   observaciones: string;
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

export type IRutinaAssociations = object;
