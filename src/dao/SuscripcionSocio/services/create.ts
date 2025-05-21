import { ISocioSuscripcion } from '../interface';
import { SocioSuscripcion } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { SOCIO_SUSCRIPCION } from '../metadata';

class SocioSuscripcionesCreator extends EntityCreator<ISocioSuscripcion> {
   model = SocioSuscripcion;
   entityName = SOCIO_SUSCRIPCION.SINGULAR;
}

export const socioSuscripcionesCreator = new SocioSuscripcionesCreator();
