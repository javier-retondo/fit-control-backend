import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { PERFIL } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class PerfilesPatcher extends EntityPatcher<IPerfil> {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesPatcher = new PerfilesPatcher();
