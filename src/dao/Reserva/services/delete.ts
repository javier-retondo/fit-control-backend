import { Reserva } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { RESERVA } from '../metadata';

class ReservasDeleter extends EntityDeleter {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasDeleter = new ReservasDeleter();
