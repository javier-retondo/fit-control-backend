import { ISede } from '../interface';
import { Sede } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { SEDE } from '../metadata';

class SedesCreator extends EntityCreator<ISede> {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesCreator = new SedesCreator();
