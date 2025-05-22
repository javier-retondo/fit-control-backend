import { initClaseAssociations } from './Clase/associations';
import { initHorarioClaseAssociations } from './ClaseProgramada/associations';
import { initMensajeAssociations } from './Mensaje/associations';
import { initNorificacionAssociations } from './Notificacion/associations';
import { initPagoAssociations } from './Pago/associations';
import { initReservaAssociations } from './Reserva/associations';
import { initRutinaAssociations } from './Rutina/associations';
import { initSedeAssociations } from './Sede/associations';
import { initSuscripcionSocioAssociations } from './SuscripcionSocio/associations';
import { initUsuarioAssociations } from './Usuario/associations';

export const InitAllAssociations = () => {
   console.log('🚀 Associations is starting...');
   initClaseAssociations();
   initHorarioClaseAssociations();
   initMensajeAssociations();
   initNorificacionAssociations();
   initPagoAssociations();
   initReservaAssociations();
   initRutinaAssociations();
   initSedeAssociations();
   initSuscripcionSocioAssociations();
   initUsuarioAssociations();
   console.log('✅ Associations is done!');
};
