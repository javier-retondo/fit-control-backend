import { IModulo } from '../interface';
import { Modulo } from '../model';
import { MODULO } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class ModulosUpdater extends EntityUpdater<IModulo> {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosUpdater = new ModulosUpdater();
