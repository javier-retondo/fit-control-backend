import { IModulo, IPerfil } from '../interfaces';

export type IPermiso = {
   id?: number;
   modulo_id: number;
   perfil_id: number;

   // relaciones
   Modulo?: IModulo;
   Perfil?: IPerfil;
};

type PermisoColumnAliasKeys = 'ID' | 'MODULO_ID' | 'PERFIL_ID';
export type IPermisoColumnsAliases = {
   [key in PermisoColumnAliasKeys]: keyof IPermiso;
};

type PermisoAssociationsKeys = 'MODULO' | 'PERFIL';

export type IPermisoAssociations = {
   [key in PermisoAssociationsKeys]: keyof IPermiso;
};
