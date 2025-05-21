import { IPago } from '../interface';
import { Pago } from '../model';
import { PAGO } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class PagosPatcher extends EntityPatcher<IPago> {
   model = Pago;
   entityName = PAGO.SINGULAR;
}

export const pagosPatcher = new PagosPatcher();
