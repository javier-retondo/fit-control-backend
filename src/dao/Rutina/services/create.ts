import { IRutina } from '../interface';
import { Rutina } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { RUTINA } from '../metadata';

class RutinasCreator extends EntityCreator<IRutina> {
   model = Rutina;
   entityName = RUTINA.SINGULAR;
}

export const rutinasCreator = new RutinasCreator();
