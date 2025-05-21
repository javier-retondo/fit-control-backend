import { Usuario } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { USUARIO } from '../metadata';

class UsuariosDeleter extends EntityDeleter {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosDeleter = new UsuariosDeleter();
