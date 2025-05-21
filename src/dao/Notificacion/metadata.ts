import { IMetadata } from '../../utils/interfaces/general';
import { INotificacionAssociations, INotificacionColumnsAliases } from './interface';

export const NOTIFICACION: IMetadata<INotificacionColumnsAliases, INotificacionAssociations> = {
   TABLE: 'notificacion',
   COLUMNS: {
      ID: 'id',
      USUARIO_ID: 'usuario_id',
      TITULO: 'titulo',
      MENSAJE: 'mensaje',
      FECHA: 'fecha',
   },
   PLURAL: 'Notificaciones',
   SINGULAR: 'Notificacion',
   ASSOCIATIONS: {
      USUARIO: 'Usuario',
   },
};
