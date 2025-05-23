import { HORARIO_CLASE, HORARIO_SEDE } from '../metadata';
import { HorarioClase, HorarioSede } from '../models';
import { SEDE } from './metadata';
import { Sede } from './model';

export const initSedeAssociations = () => {
   console.log(`   🔄 Sede associations is starting...`);
   Sede.hasMany(HorarioSede, {
      sourceKey: SEDE.COLUMNS.ID,
      foreignKey: HORARIO_SEDE.COLUMNS.SEDE_ID,
      as: SEDE.ASSOCIATIONS.HORARIOS,
   });
   Sede.hasMany(HorarioClase, {
      sourceKey: SEDE.COLUMNS.ID,
      foreignKey: HORARIO_CLASE.COLUMNS.SEDE_ID,
      as: SEDE.ASSOCIATIONS.CLASES,
   });
};
