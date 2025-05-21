import { IClase } from '../interface';
import { Clase } from '../model';
import { CLASE } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class ClasesPatcher extends EntityPatcher<IClase> {
   model = Clase;
   entityName = CLASE.SINGULAR;
}

export const clasesPatcher = new ClasesPatcher();
