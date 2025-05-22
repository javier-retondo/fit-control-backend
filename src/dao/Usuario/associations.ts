import { HORARIO_CLASE, PERFIL, RESERVA, RUTINA, SOCIO_SUSCRIPCION, USUARIO } from '../metadata';
import { HorarioClase, Perfil, Reserva, Rutina, SocioSuscripcion } from '../models';
import { Usuario } from './model';

export const initUsuarioAssociations = () => {
   console.log(`   🔄 Usuario associations is starting...`);
   Usuario.belongsTo(Perfil, {
      foreignKey: USUARIO.COLUMNS.PERFIL_ID,
      targetKey: PERFIL.COLUMNS.ID,
      as: USUARIO.ASSOCIATIONS.PERFIL,
   });
   // Relación para socio
   Usuario.hasMany(Rutina, {
      sourceKey: USUARIO.COLUMNS.ID,
      foreignKey: RUTINA.COLUMNS.SOCIO_ID,
      as: USUARIO.ASSOCIATIONS.RUTINAS,
   });
   // Relación para socio
   Usuario.hasMany(SocioSuscripcion, {
      sourceKey: USUARIO.COLUMNS.ID,
      foreignKey: SOCIO_SUSCRIPCION.COLUMNS.SOCIO_ID,
      as: USUARIO.ASSOCIATIONS.SUSCRIPCIONES,
   });
   // Relación para socio
   Usuario.hasMany(Reserva, {
      sourceKey: USUARIO.COLUMNS.ID,
      foreignKey: RESERVA.COLUMNS.SOCIO_ID,
      as: USUARIO.ASSOCIATIONS.RESERVAS,
   });
   // Relación para instructor
   Usuario.hasMany(HorarioClase, {
      sourceKey: USUARIO.COLUMNS.ID,
      foreignKey: HORARIO_CLASE.COLUMNS.INSTRUCTOR_ID,
      as: USUARIO.ASSOCIATIONS.HORARIOS_CLASES,
   });
};
