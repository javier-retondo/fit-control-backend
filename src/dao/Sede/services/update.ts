import { ISede } from '../interface';
import { Sede } from '../model';
import { SEDE } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class SedesUpdater extends EntityUpdater<ISede> {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesUpdater = new SedesUpdater();
