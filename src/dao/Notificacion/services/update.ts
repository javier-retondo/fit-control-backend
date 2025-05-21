import { INotificacion } from '../interface';
import { Notificacion } from '../model';
import { NOTIFICACION } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class NotificacionesUpdater extends EntityUpdater<INotificacion> {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesUpdater = new NotificacionesUpdater();
