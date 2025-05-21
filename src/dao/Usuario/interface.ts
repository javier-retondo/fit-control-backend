export type IUsuario = {
   id?: number;
   nombre: string;
   apellido: string;
   email: string;
   telefono: string;
   avatar_url: string;
   password: string;
   pass_provisoria: boolean;
   superadmin: boolean;
   perfil_id: number;
};

type UsuarioColumnAliasKeys =
   | 'ID'
   | 'NOMBRE'
   | 'APELLIDO'
   | 'EMAIL'
   | 'TELEFONO'
   | 'AVATAR_URL'
   | 'PASSWORD'
   | 'PASS_PROVISORIA'
   | 'SUPERADMIN'
   | 'PERFIL_ID';

export type IUsuarioColumnsAliases = {
   [key in UsuarioColumnAliasKeys]: keyof IUsuario;
};

export type IUsuarioAssociations = object;
