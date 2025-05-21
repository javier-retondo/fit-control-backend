import { ISede } from '../interface';
import { Sede } from '../model';
import { SEDE } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class SedesPatcher extends EntityPatcher<ISede> {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesPatcher = new SedesPatcher();
