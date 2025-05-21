import { IPermiso } from '../interface';
import { Permiso } from '../model';
import { PERMISO } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class PermisosPatcher extends EntityPatcher<IPermiso> {
   model = Permiso;
   entityName = PERMISO.SINGULAR;
}

export const permisosPatcher = new PermisosPatcher();
