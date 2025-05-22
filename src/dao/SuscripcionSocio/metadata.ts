import { IMetadata } from '../../utils/interfaces/general';
import { ISocioSuscripcionAssociations, ISocioSuscripcionColumnsAliases } from './interface';

export const SOCIO_SUSCRIPCION: IMetadata<
   ISocioSuscripcionColumnsAliases,
   ISocioSuscripcionAssociations
> = {
   TABLE: 'suscripcion_socio',
   COLUMNS: {
      ID: 'id',
      SOCIO_ID: 'socio_id',
      SUSCRIPCION_ID: 'suscripcion_id',
      IMPORTE: 'importe',
      VIGENCIA_DESDE: 'vigencia_desde',
      VIGENCIA_HASTA: 'vigencia_hasta',
      ESTADO: 'estado',
   },
   PLURAL: 'SocioSuscripciones',
   SINGULAR: 'SocioSuscripcion',
   ASSOCIATIONS: {
      SUSCRIPCION: 'Suscripcion',
   },
};
