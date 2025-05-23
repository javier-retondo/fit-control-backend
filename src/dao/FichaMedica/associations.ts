import { USUARIO } from '../metadata';
import { Usuario } from '../models';
import { FICHA_MEDICA } from './metadata';
import { FichaMedica } from './model';

export const initFichaMedicaAssociations = () => {
   console.log(`   🔄 Ficha Medica associations is starting...`);
   FichaMedica.belongsTo(Usuario, {
      foreignKey: FICHA_MEDICA.COLUMNS.SOCIO_ID,
      targetKey: USUARIO.COLUMNS.ID,
      as: FICHA_MEDICA.ASSOCIATIONS.SOCIO,
   });

   FichaMedica.belongsTo(Usuario, {
      foreignKey: FICHA_MEDICA.COLUMNS.UPDATED_BY,
      targetKey: USUARIO.COLUMNS.ID,
      as: FICHA_MEDICA.ASSOCIATIONS.UPDATED_BY,
   });
};
