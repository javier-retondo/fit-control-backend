export type ISuscripcion = {
   id?: number;
   nombre: string;
   descripcion: string;
   vigencia_desde: Date;
   vigencia_hasta: Date;
   estado: string;
   anual: boolean;
   importe: number;
};

type SuscripcionColumnAliasKeys =
   | 'ID'
   | 'NOMBRE'
   | 'DESCRIPCION'
   | 'VIGENCIA_DESDE'
   | 'VIGENCIA_HASTA'
   | 'ESTADO'
   | 'ANUAL'
   | 'IMPORTE';
export type ISuscripcionColumnsAliases = {
   [key in SuscripcionColumnAliasKeys]: keyof ISuscripcion;
};

export type ISuscripcionAssociations = object;
