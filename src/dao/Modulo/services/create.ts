import { IModulo } from '../interface';
import { Modulo } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { MODULO } from '../metadata';

class ModulosCreator extends EntityCreator<IModulo> {
   model = Modulo;
   entityName = MODULO.SINGULAR;
}

export const modulosCreator = new ModulosCreator();
