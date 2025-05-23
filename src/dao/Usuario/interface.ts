import { IHorarioClase, IPerfil, IReserva, IRutina, ISuscripcion } from '../interfaces';

export type IUsuario = {
   id?: number;
   nombre: string;
   apellido: string;
   email: string;
   telefono?: string;
   avatar_url?: string;
   password: string;
   usuario: string;
   pass_provisoria: boolean;
   superadmin: boolean;
   perfil_id?: number;
   dni?: string;

   // relaciones
   Perfil?: IPerfil;
   Rutinas?: IRutina[];
   HorariosClases?: IHorarioClase[];
   Suscripciones?: ISuscripcion[];
   Reservas?: IReserva[];
};

type UsuarioColumnAliasKeys =
   | 'ID'
   | 'NOMBRE'
   | 'APELLIDO'
   | 'EMAIL'
   | 'TELEFONO'
   | 'AVATAR_URL'
   | 'PASSWORD'
   | 'USUARIO'
   | 'PASS_PROVISORIA'
   | 'SUPERADMIN'
   | 'PERFIL_ID'
   | 'DNI';

export type IUsuarioColumnsAliases = {
   [key in UsuarioColumnAliasKeys]: keyof IUsuario;
};

type UsuarioAssociationsKeys =
   | 'PERFIL'
   | 'RUTINAS'
   | 'SUSCRIPCIONES'
   | 'HORARIOS_CLASES'
   | 'RESERVAS';

export type IUsuarioAssociations = {
   [key in UsuarioAssociationsKeys]: keyof IUsuario;
};
