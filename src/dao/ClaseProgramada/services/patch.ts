import { IHorarioClase } from '../interface';
import { HorarioClase } from '../model';
import { HORARIO_CLASE } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class HorariosClasePatcher extends EntityPatcher<IHorarioClase> {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClasePatcher = new HorariosClasePatcher();
