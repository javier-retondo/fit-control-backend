import { Modulo } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { MODULO } from '../metadata';

class ModulosDeleter extends EntityDeleter {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosDeleter = new ModulosDeleter();
