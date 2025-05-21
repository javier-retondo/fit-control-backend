import { IPermiso } from '../interface';
import { Permiso } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { PERMISO } from '../metadata';

class PermisosCreator extends EntityCreator<IPermiso> {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosCreator = new PermisosCreator();
