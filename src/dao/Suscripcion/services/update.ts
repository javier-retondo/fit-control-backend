import { ISuscripcion } from '../interface';
import { Suscripcion } from '../model';
import { SUSCRIPCION } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class SuscripcionesUpdater extends EntityUpdater<ISuscripcion> {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesUpdater = new SuscripcionesUpdater();
