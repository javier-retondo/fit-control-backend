import { initClaseAssociations } from './Clase/associations';
import { initHorarioClaseAssociations } from './ClaseProgramada/associations';
import { initMensajeAssociations } from './Mensaje/associations';
import { initNorificacionAssociations } from './Notificacion/associations';

export const InitAllAssociations = () => {
   console.log('🚀 Associations is starting...');
   initClaseAssociations();
   initHorarioClaseAssociations();
   initMensajeAssociations();
   initNorificacionAssociations();
   console.log('✅ Associations is done!');
};
