import { IMensaje } from '../interface';
import { Mensaje } from '../model';
import { MENSAJE } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class MensajesUpdater extends EntityUpdater<IMensaje> {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesUpdater = new MensajesUpdater();
