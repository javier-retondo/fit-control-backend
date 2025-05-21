export type IHorarioSede = {
   id?: number;
   sede_id: number;
   dia_semana: number;
   horario: Date;
   feriado: boolean;
};

type HorarioSedeColumnAliasKeys = 'ID' | 'SEDE_ID' | 'DIA_SEMANA' | 'HORARIO' | 'FERIADO';
export type IHorarioSedeColumnsAliases = {
   [key in HorarioSedeColumnAliasKeys]: keyof IHorarioSede;
};

export type IHorarioSedeAssociations = object;
