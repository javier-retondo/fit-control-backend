import { IMensaje } from '../interface';
import { Mensaje } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { MENSAJE } from '../metadata';

class MensajesCreator extends EntityCreator<IMensaje> {
   model = Mensaje;
   entityName = MENSAJE.SINGULAR;
}

export const mensajesCreator = new MensajesCreator();
