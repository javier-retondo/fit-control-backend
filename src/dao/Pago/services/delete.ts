import { Pago } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { PAGO } from '../metadata';

class PagosDeleter extends EntityDeleter {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosDeleter = new PagosDeleter();
