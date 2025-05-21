import { Notificacion } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { NOTIFICACION } from '../metadata';

class NotificacionesDeleter extends EntityDeleter {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesDeleter = new NotificacionesDeleter();
