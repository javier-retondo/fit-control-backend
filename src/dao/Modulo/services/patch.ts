import { IModulo } from '../interface';
import { Modulo } from '../model';
import { MODULO } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class ModulosPatcher extends EntityPatcher<IModulo> {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosPatcher = new ModulosPatcher();
