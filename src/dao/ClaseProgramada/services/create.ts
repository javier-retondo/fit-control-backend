import { IHorarioClase } from '../interface';
import { HorarioClase } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { HORARIO_CLASE } from '../metadata';

class HorariosClaseCreator extends EntityCreator<IHorarioClase> {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClaseCreator = new HorariosClaseCreator();
