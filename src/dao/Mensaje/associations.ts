import { USUARIO } from '../metadata';
import { Usuario } from '../models';
import { MENSAJE } from './metadata';
import { Mensaje } from './model';

export const initMensajeAssociations = () => {
   console.log(`   🔄 Mensaje associations is starting...`);
   Mensaje.belongsTo(Usuario, {
      foreignKey: MENSAJE.COLUMNS.REMITENTE_ID,
      targetKey: USUARIO.COLUMNS.ID,
      as: MENSAJE.ASSOCIATIONS.USUARIO_REMITENTE,
   });
   Mensaje.belongsTo(Usuario, {
      foreignKey: MENSAJE.COLUMNS.DESTINATARIO_ID,
      targetKey: USUARIO.COLUMNS.ID,
      as: MENSAJE.ASSOCIATIONS.USUARIO_DESTINATARIO,
   });
};
