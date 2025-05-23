import { MODULO, PERFIL } from '../metadata';
import { Modulo, Perfil } from '../models';
import { PERMISO } from './metadata';
import { Permiso } from './model';

export const initPermisosAssociations = () => {
   console.log(`   🔄 Permisos associations is starting...`);
   Permiso.belongsTo(Perfil, {
      foreignKey: PERMISO.COLUMNS.PERFIL_ID,
      targetKey: PERFIL.COLUMNS.ID,
      as: PERMISO.ASSOCIATIONS.PERFIL,
   });
   Permiso.belongsTo(Modulo, {
      foreignKey: PERMISO.COLUMNS.MODULO_ID,
      targetKey: MODULO.COLUMNS.ID,
      as: PERMISO.ASSOCIATIONS.MODULO,
   });
};
