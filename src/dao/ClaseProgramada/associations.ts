import { CLASE, RESERVA, SEDE } from '../metadata';
import { Clase, Reserva, Sede } from '../models';
import { HORARIO_CLASE } from './metadata';
import { HorarioClase } from './model';

export const initHorarioClaseAssociations = () => {
   console.log(`   🔄 HorarioClase associations is starting...`);
   HorarioClase.belongsTo(Clase, {
      foreignKey: HORARIO_CLASE.COLUMNS.CLASE_ID,
      targetKey: CLASE.COLUMNS.ID,
      as: HORARIO_CLASE.ASSOCIATIONS.CLASE,
   });
   HorarioClase.belongsTo(Sede, {
      foreignKey: HORARIO_CLASE.COLUMNS.SEDE_ID,
      targetKey: SEDE.COLUMNS.ID,
      as: HORARIO_CLASE.ASSOCIATIONS.SEDE,
   });
   HorarioClase.hasMany(Reserva, {
      foreignKey: RESERVA.COLUMNS.HORARIO_CLASE_ID,
      sourceKey: HORARIO_CLASE.COLUMNS.ID,
      as: HORARIO_CLASE.ASSOCIATIONS.RESERVAS,
   });
};
