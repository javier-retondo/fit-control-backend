import { SOCIO_SUSCRIPCION, SUSCRIPCION } from '../metadata';
import { SocioSuscripcion, Suscripcion } from '../models';

export const initSuscripcionSocioAssociations = () => {
   console.log(`   🔄 SuscripcionSocio associations is starting...`);
   SocioSuscripcion.belongsTo(Suscripcion, {
      foreignKey: SOCIO_SUSCRIPCION.COLUMNS.SUSCRIPCION_ID,
      targetKey: SUSCRIPCION.COLUMNS.ID,
      as: SOCIO_SUSCRIPCION.ASSOCIATIONS.SUSCRIPCION,
   });
};
