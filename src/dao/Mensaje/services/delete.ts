import { Mensaje } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { MENSAJE } from '../metadata';

class MensajesDeleter extends EntityDeleter {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesDeleter = new MensajesDeleter();
