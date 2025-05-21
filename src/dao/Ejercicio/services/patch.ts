import { IEjercicio } from '../interface';
import { Ejercicio } from '../model';
import { EJERCICIO } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class EjerciciosPatcher extends EntityPatcher<IEjercicio> {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosPatcher = new EjerciciosPatcher();
