import { ESTADOS } from '../../utils/constants/SYSTEM_ENUMS';
import { IPermiso } from '../Permiso/interface';
import { IUsuario } from '../Usuario/interface';

export enum EPerfil {
   ADMINISTRADOR = 1,
   RECEPCIONISTA = 2,
   COORDINADOR = 3,
   INSTRUCTOR = 4,
   SOCIO = 5,
}

export type IPerfil = {
   id?: EPerfil;
   descripcion: string;
   estado: ESTADOS;

   // relaciones
   Permisos?: IPermiso[];
   Usuarios?: IUsuario[];
};

type PerfilColumnAliasKeys = 'ID' | 'DESCRIPCION' | 'ESTADO';
export type IPerfilColumnsAliases = {
   [key in PerfilColumnAliasKeys]: keyof IPerfil;
};

type PerfilAssociationKeys = 'PERMISOS' | 'USUARIOS';

export type IPerfilAssociations = {
   [key in PerfilAssociationKeys]: keyof IPerfil;
};
