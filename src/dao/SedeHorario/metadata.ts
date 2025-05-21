import { IMetadata } from '../../utils/interfaces/general';
import { IHorarioSedeAssociations, IHorarioSedeColumnsAliases } from './interface';

export const HORARIO_SEDE: IMetadata<IHorarioSedeColumnsAliases, IHorarioSedeAssociations> = {
   TABLE: 'sede_horario',
   COLUMNS: {
      ID: 'id',
      SEDE_ID: 'sede_id',
      DIA_SEMANA: 'dia_semana',
      HORARIO: 'horario',
      FERIADO: 'feriado',
   },
   PLURAL: 'HorariosSede',
   SINGULAR: 'HorarioSede',
   ASSOCIATIONS: {},
};
