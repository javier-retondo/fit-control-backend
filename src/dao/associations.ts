import { initClaseAssociations } from './Clase/associations';
import { initHorarioClaseAssociations } from './ClaseProgramada/associations';
import { initFichaMedicaAssociations } from './FichaMedica/associations';
import { initMensajeAssociations } from './Mensaje/associations';
import { initNorificacionAssociations } from './Notificacion/associations';
import { initPagoAssociations } from './Pago/associations';
import { initPermisosAssociations } from './Permiso/associations';
import { initReservaAssociations } from './Reserva/associations';
import { initRutinaAssociations } from './Rutina/associations';
import { initSedeAssociations } from './Sede/associations';
import { initSuscripcionSocioAssociations } from './SuscripcionSocio/associations';
import { initUsuarioAssociations } from './Usuario/associations';

export const InitAllAssociations = () => {
   console.log('🚀 Associations is starting...');
   initClaseAssociations();
   initHorarioClaseAssociations();
   initFichaMedicaAssociations();
   initMensajeAssociations();
   initNorificacionAssociations();
   initPagoAssociations();
   initPermisosAssociations();
   initReservaAssociations();
   initRutinaAssociations();
   initSedeAssociations();
   initSuscripcionSocioAssociations();
   initUsuarioAssociations();
   console.log('✅ Associations is done!');
};
