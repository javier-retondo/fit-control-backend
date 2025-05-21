import { Rutina } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { RUTINA } from '../metadata';

class RutinasDeleter extends EntityDeleter {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasDeleter = new RutinasDeleter();
