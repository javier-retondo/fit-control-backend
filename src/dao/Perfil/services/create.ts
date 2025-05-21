import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { PERFIL } from '../metadata';

class PerfilesCreator extends EntityCreator<IPerfil> {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesCreator = new PerfilesCreator();
