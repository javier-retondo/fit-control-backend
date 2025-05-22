import { IMetadata } from '../../utils/interfaces/general';
import { IReservaAssociations, IReservaColumnsAliases } from './interface';

export const RESERVA: IMetadata<IReservaColumnsAliases, IReservaAssociations> = {
   TABLE: 'reserva',
   COLUMNS: {
      ID: 'id',
      HORARIO_CLASE_ID: 'clase_programada_id',
      SOCIO_ID: 'socio_id',
      FECHA: 'fecha',
   },
   PLURAL: 'Reservas',
   SINGULAR: 'Reserva',
   ASSOCIATIONS: {
      HORARIO: 'Horario',
      SOCIO: 'Socio',
   },
};
