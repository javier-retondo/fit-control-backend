import { IPago } from '../interface';
import { Pago } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { PAGO } from '../metadata';

class PagosCreator extends EntityCreator<IPago> {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosCreator = new PagosCreator();
