import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { MEDIO_PAGO } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class MediosPagoUpdater extends EntityUpdater<IMedioPago> {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoUpdater = new MediosPagoUpdater();
