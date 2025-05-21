import { IMetadata } from '../../utils/interfaces/general';
import { ISuscripcionAssociations, ISuscripcionColumnsAliases } from './interface';

export const SUSCRIPCION: IMetadata<ISuscripcionColumnsAliases, ISuscripcionAssociations> = {
   TABLE: 'suscripcion',
   COLUMNS: {
      ID: 'id',
      NOMBRE: 'nombre',
      DESCRIPCION: 'descripcion',
      VIGENCIA_DESDE: 'vigencia_desde',
      VIGENCIA_HASTA: 'vigencia_hasta',
      ESTADO: 'estado',
      ANUAL: 'anual',
      IMPORTE: 'importe',
   },
   PLURAL: 'Suscripciones',
   SINGULAR: 'Suscripcion',
   ASSOCIATIONS: {},
};
