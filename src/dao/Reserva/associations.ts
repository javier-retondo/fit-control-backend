import { HORARIO_CLASE, RESERVA, USUARIO } from '../metadata';
import { HorarioClase, Usuario } from '../models';
import { Reserva } from './model';

export const initReservaAssociations = () => {
   console.log(`   🔄 Reserva associations is starting...`);
   Reserva.belongsTo(HorarioClase, {
      foreignKey: RESERVA.COLUMNS.HORARIO_CLASE_ID,
      targetKey: HORARIO_CLASE.COLUMNS.ID,
      as: RESERVA.ASSOCIATIONS.HORARIO,
   });
   Reserva.belongsTo(Usuario, {
      foreignKey: RESERVA.COLUMNS.SOCIO_ID,
      targetKey: USUARIO.COLUMNS.ID,
      as: RESERVA.ASSOCIATIONS.SOCIO,
   });
};
