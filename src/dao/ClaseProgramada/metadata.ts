import { IMetadata } from '../../utils/interfaces/general';
import { IHorarioClaseAssociations, IHorarioClaseColumnsAliases } from './interface';

export const HORARIO_CLASE: IMetadata<IHorarioClaseColumnsAliases, IHorarioClaseAssociations> = {
   TABLE: 'clase_programada',
   COLUMNS: {
      ID: 'id',
      CLASE_ID: 'clase_id',
      INSTRUCTOR_ID: 'instructor_id',
      DIA_SEMANA: 'dia_semana',
      HORARIO: 'horario',
      SEDE_ID: 'sede_id',
   },
   PLURAL: 'HorariosClase',
   SINGULAR: 'HorarioClase',
   ASSOCIATIONS: {
      CLASE: 'Clase',
      SEDE: 'Sede',
      RESERVAS: 'Reservas',
      INSTRUCTOR: 'Instructor',
   },
};
