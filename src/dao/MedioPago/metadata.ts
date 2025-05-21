import { IMetadata } from '../../utils/interfaces/general';
import { IMedioPagoAssociations, IMedioPagoColumnsAliases } from './interface';

export const MEDIO_PAGO: IMetadata<IMedioPagoColumnsAliases, IMedioPagoAssociations> = {
   TABLE: 'medio_pago',
   COLUMNS: {
      ID: 'id',
      TIPO: 'tipo',
      DESCRIPCION: 'descripcion',
      ESTADO: 'estado',
   },
   PLURAL: 'MediosPago',
   SINGULAR: 'MedioPago',
   ASSOCIATIONS: {},
};
