import { IRutina } from '../interface';
import { Rutina } from '../model';
import { RUTINA } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class RutinasPatcher extends EntityPatcher<IRutina> {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasPatcher = new RutinasPatcher();
