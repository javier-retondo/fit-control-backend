import { MedioPago } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { MEDIO_PAGO } from '../metadata';

class MediosPagoDeleter extends EntityDeleter {
   model = MedioPago;
   entityName = MEDIO_PAGO.SINGULAR;
}

export const mediosPagoDeleter = new MediosPagoDeleter();
