import { Perfil } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { PERFIL } from '../metadata';

class PerfilesDeleter extends EntityDeleter {
   model = Perfil;
   entityName = PERFIL.SINGULAR;
}

export const perfilesDeleter = new PerfilesDeleter();
