export type IPermiso = {
   id?: number;
   modulo_id: number;
   perfil_id: number;
};

type PermisoColumnAliasKeys = 'ID' | 'MODULO_IS' | 'PERFIL_ID';
export type IPermisoColumnsAliases = {
   [key in PermisoColumnAliasKeys]: keyof IPermiso;
};

export type IPermisoAssociations = object;
