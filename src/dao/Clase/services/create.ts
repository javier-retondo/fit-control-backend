import { IClase } from '../interface';
import { Clase } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { CLASE } from '../metadata';

class ClasesCreator extends EntityCreator<IClase> {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesCreator = new ClasesCreator();
