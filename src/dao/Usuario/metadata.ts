import { IMetadata } from '../../utils/interfaces/general';
import { IUsuarioAssociations, IUsuarioColumnsAliases } from './interface';

export const USUARIO: IMetadata<IUsuarioColumnsAliases, IUsuarioAssociations> = {
   TABLE: 'usuario',
   COLUMNS: {
      ID: 'id',
      NOMBRE: 'nombre',
      APELLIDO: 'apellido',
      EMAIL: 'email',
      TELEFONO: 'telefono',
      AVATAR_URL: 'avatar_url',
      PASSWORD: 'password',
      USUARIO: 'usuario',
      PASS_PROVISORIA: 'pass_provisoria',
      SUPERADMIN: 'superadmin',
      PERFIL_ID: 'perfil_id',
      DNI: 'dni',
   },
   PLURAL: 'Usuarios',
   SINGULAR: 'Usuario',
   ASSOCIATIONS: {
      PERFIL: 'Perfil',
      RUTINAS: 'Rutinas',
      SUSCRIPCIONES: 'Suscripciones',
      HORARIOS_CLASES: 'HorariosClases',
      RESERVAS: 'Reservas',
   },
};
