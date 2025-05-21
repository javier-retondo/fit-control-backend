import { USUARIO } from '../metadata';
import { Usuario } from '../models';
import { NOTIFICACION } from './metadata';
import { Notificacion } from './model';

export const initNorificacionAssociations = () => {
   console.log(`   🔄 Notificacion associations is starting...`);
   Notificacion.belongsTo(Usuario, {
      foreignKey: NOTIFICACION.COLUMNS.USUARIO_ID,
      targetKey: USUARIO.COLUMNS.ID,
      as: NOTIFICACION.ASSOCIATIONS.USUARIO,
   });
};
