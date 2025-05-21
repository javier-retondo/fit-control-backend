import { Sede } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { SEDE } from '../metadata';

class SedesDeleter extends EntityDeleter {
   model = Sede;
   entityName = SEDE.SINGULAR;
}

export const sedesDeleter = new SedesDeleter();
