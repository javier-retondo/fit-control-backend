import { IUsuario } from '../interfaces';

export type INotificacion = {
   id?: number;
   usuario_id: number;
   titulo: string;
   mensaje: string;
   fecha: Date;

   // Associations
   Usuario?: IUsuario;
};

type NotificacionColumnAliasKeys = 'ID' | 'USUARIO_ID' | 'TITULO' | 'MENSAJE' | 'FECHA';
export type INotificacionColumnsAliases = {
   [key in NotificacionColumnAliasKeys]: keyof INotificacion;
};

type NotificacionAssociationsKeys = 'USUARIO';

export type INotificacionAssociations = {
   [key in NotificacionAssociationsKeys]: keyof INotificacion;
};
