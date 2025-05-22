import { IMetadata } from '../../utils/interfaces/general';
import { IPagoAssociations, IPagoColumnsAliases } from './interface';

export const PAGO: IMetadata<IPagoColumnsAliases, IPagoAssociations> = {
   TABLE: 'pago',
   COLUMNS: {
      ID: 'id',
      SUSCRIPCION_SOCIO_ID: 'suscripcion_socio_id',
      MONTO: 'monto',
      FECHA: 'fecha',
      MEDIO_PAGO_ID: 'medio_pago_id',
   },
   PLURAL: 'Pagos',
   SINGULAR: 'Pago',
   ASSOCIATIONS: {
      MEDIO_PAGO: 'MedioPago',
      SUSCRIPCION_SOCIO: 'SuscripcionSocio',
   },
};
