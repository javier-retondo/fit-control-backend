import { INotificacion } from '../interface';
import { Notificacion } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { NOTIFICACION } from '../metadata';

class NotificacionesCreator extends EntityCreator<INotificacion> {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesCreator = new NotificacionesCreator();
