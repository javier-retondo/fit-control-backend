import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { MEDIO_PAGO } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class MediosPagoPatcher extends EntityPatcher<IMedioPago> {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoPatcher = new MediosPagoPatcher();
