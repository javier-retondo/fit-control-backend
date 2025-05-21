import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { USUARIO } from '../metadata';

class UsuariosCreator extends EntityCreator<IUsuario> {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosCreator = new UsuariosCreator();
