import { HorarioSede } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { HORARIO_SEDE } from '../metadata';

class HorariosSedeDeleter extends EntityDeleter {
   model = HorarioSede;
   entityName = HORARIO_SEDE.SINGULAR;
}

export const horariosSedeDeleter = new HorariosSedeDeleter();
