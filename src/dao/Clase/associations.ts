import { CLASE, HORARIO_CLASE } from '../metadata';
import { HorarioClase } from '../models';
import { Clase } from './model';

export const initClaseAssociations = () => {
   console.log(`   🔄 Clase associations is starting...`);
   Clase.hasMany(HorarioClase, {
      foreignKey: HORARIO_CLASE.COLUMNS.CLASE_ID,
      sourceKey: CLASE.COLUMNS.ID,
      as: CLASE.ASSOCIATIONS.HORARIOS,
   });
};
