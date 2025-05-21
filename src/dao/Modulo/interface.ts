export type IModulo = {
   id?: number;
   nombre: string;
};

type ModuloColumnAliasKeys = 'ID' | 'NOMBRE';
export type IModuloColumnsAliases = {
   [key in ModuloColumnAliasKeys]: keyof IModulo;
};

export type IModuloAssociations = object;
