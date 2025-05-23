import { Model, ModelStatic } from 'sequelize';
import { createInclude, IncludeItem } from '../../abstractions/includes';
import { IHorarioClase, IPerfil, IReserva, IRutina, ISuscripcion } from '../interfaces';
import { HORARIO_CLASE, PERFIL, RESERVA, RUTINA, SUSCRIPCION } from '../metadata';
import { HorarioClase, Perfil, Reserva, Rutina, Suscripcion } from '../models';
import { IUsuarioAssociations } from './interface';
import { USUARIO } from './metadata';

export function createUserInclude<TModel extends Model, TInterface extends Record<string, any>>(
   model: ModelStatic<TModel>,
   as: keyof IUsuarioAssociations,
   attributes: (keyof TInterface & string)[],
   nestedIncludes?: IncludeItem[],
   required?: boolean,
   separate?: boolean,
   through?: boolean,
): IncludeItem {
   return createInclude<TModel, TInterface, IUsuarioAssociations>(
      model,
      USUARIO.ASSOCIATIONS[as],
      attributes,
      nestedIncludes,
      required,
      separate,
      through,
   );
}

export const UsuarioIncludes: IncludeItem[] = [
   createUserInclude<Perfil, IPerfil>(Perfil, 'PERFIL', [
      PERFIL.COLUMNS.ID,
      PERFIL.COLUMNS.DESCRIPCION,
   ]),
   createUserInclude<Rutina, IRutina>(Rutina, 'RUTINAS', [
      RUTINA.COLUMNS.ID,
      RUTINA.COLUMNS.NOMBRE,
   ]),
   createUserInclude<Suscripcion, ISuscripcion>(Suscripcion, 'SUSCRIPCIONES', [
      SUSCRIPCION.COLUMNS.ID,
      SUSCRIPCION.COLUMNS.NOMBRE,
      SUSCRIPCION.COLUMNS.DESCRIPCION,
   ]),
   createUserInclude<HorarioClase, IHorarioClase>(HorarioClase, 'HORARIOS_CLASES', [
      HORARIO_CLASE.COLUMNS.ID,
      HORARIO_CLASE.COLUMNS.DIA_SEMANA,
      HORARIO_CLASE.COLUMNS.HORARIO,
   ]),
   createUserInclude<Reserva, IReserva>(Reserva, 'RESERVAS', [
      RESERVA.COLUMNS.ID,
      RESERVA.COLUMNS.FECHA,
      RESERVA.COLUMNS.HORARIO_CLASE_ID,
   ]),
];
