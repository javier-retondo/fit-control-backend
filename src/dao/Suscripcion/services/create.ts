import { ISuscripcion } from '../interface';
import { Suscripcion } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { SUSCRIPCION } from '../metadata';

class SuscripcionesCreator extends EntityCreator<ISuscripcion> {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesCreator = new SuscripcionesCreator();
