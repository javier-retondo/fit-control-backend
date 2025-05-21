import { IUsuario } from '../interfaces';

export type IMensaje = {
   id?: number;
   usuario_remitente_id: number;
   usuario_destinatario_id: number;
   contenido: string;
   fecha: Date;
   estado: string;

   // relaciones
   UsuarioRemitente?: IUsuario;
   UsuarioDestinatario?: IUsuario;
};

type MensajeColumnAliasKeys =
   | 'ID'
   | 'REMITENTE_ID'
   | 'DESTINATARIO_ID'
   | 'CONTENIDO'
   | 'FECHA'
   | 'ESTADO';
export type IMensajeColumnsAliases = {
   [key in MensajeColumnAliasKeys]: keyof IMensaje;
};

type MensajeAssociationsKeys = 'USUARIO_REMITENTE' | 'USUARIO_DESTINATARIO';

export type IMensajeAssociations = {
   [key in MensajeAssociationsKeys]: keyof IMensaje;
};
