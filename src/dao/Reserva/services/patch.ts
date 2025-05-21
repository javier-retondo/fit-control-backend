import { IReserva } from '../interface';
import { Reserva } from '../model';
import { RESERVA } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class ReservasPatcher extends EntityPatcher<IReserva> {
   model = Reserva;
   entityName = RESERVA.SINGULAR;
}

export const reservasPatcher = new ReservasPatcher();
