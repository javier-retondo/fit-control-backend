import { Permiso } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { PERMISO } from '../metadata';

class PermisosDeleter extends EntityDeleter {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosDeleter = new PermisosDeleter();
