import { IHorarioSede } from '../interface';
import { HorarioSede } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { HORARIO_SEDE } from '../metadata';

class HorariosSedeCreator extends EntityCreator<IHorarioSede> {
   model = HorarioSede;
   entityName = HORARIO_SEDE.SINGULAR;
}

export const horariosSedeCreator = new HorariosSedeCreator();
