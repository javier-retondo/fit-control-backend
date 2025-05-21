import { IMedioPago } from '../interface';
import { MedioPago } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { MEDIO_PAGO } from '../metadata';

class MediosPagoCreator extends EntityCreator<IMedioPago> {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoCreator = new MediosPagoCreator();
