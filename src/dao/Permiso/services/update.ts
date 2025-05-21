import { IPermiso } from '../interface';
import { Permiso } from '../model';
import { PERMISO } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class PermisosUpdater extends EntityUpdater<IPermiso> {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosUpdater = new PermisosUpdater();
