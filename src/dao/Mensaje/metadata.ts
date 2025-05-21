import { IMetadata } from '../../utils/interfaces/general';
import { IMensajeAssociations, IMensajeColumnsAliases } from './interface';

export const MENSAJE: IMetadata<IMensajeColumnsAliases, IMensajeAssociations> = {
   TABLE: 'mensaje',
   COLUMNS: {
      ID: 'id',
      REMITENTE_ID: 'usuario_remitente_id',
      DESTINATARIO_ID: 'usuario_destinatario_id',
      CONTENIDO: 'contenido',
      FECHA: 'fecha',
      ESTADO: 'estado',
   },
   PLURAL: 'Mensajes',
   SINGULAR: 'Mensaje',
   ASSOCIATIONS: {
      USUARIO_REMITENTE: 'UsuarioRemitente',
      USUARIO_DESTINATARIO: 'UsuarioDestinatario',
   },
};
