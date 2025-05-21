import { SocioSuscripcion } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { SOCIO_SUSCRIPCION } from '../metadata';

class SocioSuscripcionesDeleter extends EntityDeleter {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesDeleter = new SocioSuscripcionesDeleter();
