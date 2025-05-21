import { IPerfil } from '../interface';
import { Perfil } from '../model';
import { PERFIL } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class PerfilesUpdater extends EntityUpdater<IPerfil> {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesUpdater = new PerfilesUpdater();
