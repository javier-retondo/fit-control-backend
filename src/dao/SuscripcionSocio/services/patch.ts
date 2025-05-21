import { ISocioSuscripcion } from '../interface';
import { SocioSuscripcion } from '../model';
import { SOCIO_SUSCRIPCION } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class SocioSuscripcionesPatcher extends EntityPatcher<ISocioSuscripcion> {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesPatcher = new SocioSuscripcionesPatcher();
