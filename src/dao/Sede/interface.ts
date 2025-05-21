export type ISede = {
   id?: number;
   nombre: string;
   descripcion: string;
   estado: string;
};

type SedeColumnAliasKeys = 'ID' | 'NOMBRE' | 'DESCRIPCION' | 'ESTADO';
export type ISedeColumnsAliases = {
   [key in SedeColumnAliasKeys]: keyof ISede;
};

export type ISedeAssociations = object;
