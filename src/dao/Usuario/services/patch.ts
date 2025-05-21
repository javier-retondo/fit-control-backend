import { IUsuario } from '../interface';
import { Usuario } from '../model';
import { USUARIO } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class UsuariosPatcher extends EntityPatcher<IUsuario> {
   model = Usuario;
   entityName = USUARIO.SINGULAR;
}

export const usuariosPatcher = new UsuariosPatcher();
