import { IMensaje } from '../interface';
import { Mensaje } from '../model';
import { MENSAJE } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class MensajesPatcher extends EntityPatcher<IMensaje> {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesPatcher = new MensajesPatcher();
