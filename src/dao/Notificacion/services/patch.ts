import { INotificacion } from '../interface';
import { Notificacion } from '../model';
import { NOTIFICACION } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class NotificacionesPatcher extends EntityPatcher<INotificacion> {
   model = Notificacion;
   entityName = NOTIFICACION.SINGULAR;
}

export const notificacionesPatcher = new NotificacionesPatcher();
