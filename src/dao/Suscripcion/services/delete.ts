import { Suscripcion } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { SUSCRIPCION } from '../metadata';

class SuscripcionesDeleter extends EntityDeleter {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesDeleter = new SuscripcionesDeleter();
