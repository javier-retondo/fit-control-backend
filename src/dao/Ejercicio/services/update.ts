import { IEjercicio } from '../interface';
import { Ejercicio } from '../model';
import { EJERCICIO } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class EjerciciosUpdater extends EntityUpdater<IEjercicio> {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosUpdater = new EjerciciosUpdater();
