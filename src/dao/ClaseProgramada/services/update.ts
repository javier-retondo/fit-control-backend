import { IHorarioClase } from '../interface';
import { HorarioClase } from '../model';
import { HORARIO_CLASE } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class HorariosClaseUpdater extends EntityUpdater<IHorarioClase> {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClaseUpdater = new HorariosClaseUpdater();
