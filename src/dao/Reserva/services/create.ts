import { IReserva } from '../interface';
import { Reserva } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { RESERVA } from '../metadata';

class ReservasCreator extends EntityCreator<IReserva> {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasCreator = new ReservasCreator();
