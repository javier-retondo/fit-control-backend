import { EJERCICIO, USUARIO } from '../metadata';
import { Ejercicio, Usuario } from '../models';
import { RUTINA } from './metadata';
import { Rutina } from './model';

export const initRutinaAssociations = () => {
   console.log(`   🔄 Rutina associations is starting...`);
   Rutina.hasMany(Ejercicio, {
      foreignKey: EJERCICIO.COLUMNS.RUTINA_ID,
      sourceKey: RUTINA.COLUMNS.ID,
      as: RUTINA.ASSOCIATIONS.EJERCICIOS,
   });

   Rutina.belongsTo(Usuario, {
      foreignKey: RUTINA.COLUMNS.SOCIO_ID,
      targetKey: USUARIO.COLUMNS.ID,
      as: RUTINA.ASSOCIATIONS.SOCIO,
   });
};
