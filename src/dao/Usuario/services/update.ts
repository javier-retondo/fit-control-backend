import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { USUARIO } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class UsuariosUpdater extends EntityUpdater<IUsuario> {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosUpdater = new UsuariosUpdater();
