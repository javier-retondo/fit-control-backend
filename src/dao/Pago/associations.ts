import { MEDIO_PAGO, SOCIO_SUSCRIPCION } from '../metadata';
import { MedioPago, SocioSuscripcion } from '../models';
import { PAGO } from './metadata';
import { Pago } from './model';

export const initPagoAssociations = () => {
   console.log(`   🔄 Pago associations is starting...`);
   Pago.belongsTo(SocioSuscripcion, {
      foreignKey: PAGO.COLUMNS.SUSCRIPCION_SOCIO_ID,
      targetKey: SOCIO_SUSCRIPCION.COLUMNS.ID,
      as: PAGO.ASSOCIATIONS.SUSCRIPCION_SOCIO,
   });

   Pago.belongsTo(MedioPago, {
      foreignKey: PAGO.COLUMNS.MEDIO_PAGO_ID,
      targetKey: MEDIO_PAGO.COLUMNS.ID,
      as: PAGO.ASSOCIATIONS.MEDIO_PAGO,
   });
};
