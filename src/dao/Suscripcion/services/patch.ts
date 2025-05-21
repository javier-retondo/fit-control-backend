import { ISuscripcion } from '../interface';
import { Suscripcion } from '../model';
import { SUSCRIPCION } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class SuscripcionesPatcher extends EntityPatcher<ISuscripcion> {
   model = Suscripcion;
   entityName = SUSCRIPCION.SINGULAR;
}

export const suscripcionesPatcher = new SuscripcionesPatcher();
