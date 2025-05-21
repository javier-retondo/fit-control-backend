import { Clase } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { CLASE } from '../metadata';

class ClasesDeleter extends EntityDeleter {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesDeleter = new ClasesDeleter();
