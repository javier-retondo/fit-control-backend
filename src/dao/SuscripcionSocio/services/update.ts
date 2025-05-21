import { ISocioSuscripcion } from '../interface';
import { SocioSuscripcion } from '../model';
import { SOCIO_SUSCRIPCION } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class SocioSuscripcionesUpdater extends EntityUpdater<ISocioSuscripcion> {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesUpdater = new SocioSuscripcionesUpdater();
