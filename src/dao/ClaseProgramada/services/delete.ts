import { HorarioClase } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { HORARIO_CLASE } from '../metadata';

class HorariosClaseDeleter extends EntityDeleter {
   model = HorarioClase;
   entityName = HORARIO_CLASE.SINGULAR;
}

export const horariosClaseDeleter = new HorariosClaseDeleter();
