import { IHorarioSede } from '../interface';
import { HorarioSede } from '../model';
import { HORARIO_SEDE } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class HorariosSedePatcher extends EntityPatcher<IHorarioSede> {
   model = HorarioSede;
   entityName = HORARIO_SEDE.SINGULAR;
}

export const horariosSedePatcher = new HorariosSedePatcher();
