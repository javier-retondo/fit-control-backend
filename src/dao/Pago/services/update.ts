import { IPago } from '../interface';
import { Pago } from '../model';
import { PAGO } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class PagosUpdater extends EntityUpdater<IPago> {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosUpdater = new PagosUpdater();
