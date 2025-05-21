import { IClase } from '../interface';
import { Clase } from '../model';
import { CLASE } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class ClasesUpdater extends EntityUpdater<IClase> {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesUpdater = new ClasesUpdater();
