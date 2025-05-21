import { IRutina } from '../interface';
import { Rutina } from '../model';
import { RUTINA } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class RutinasUpdater extends EntityUpdater<IRutina> {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasUpdater = new RutinasUpdater();
