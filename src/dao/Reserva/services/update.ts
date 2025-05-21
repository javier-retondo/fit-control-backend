import { IReserva } from '../interface';
import { Reserva } from '../model';
import { RESERVA } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class ReservasUpdater extends EntityUpdater<IReserva> {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasUpdater = new ReservasUpdater();
