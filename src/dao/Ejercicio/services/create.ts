import { IEjercicio } from '../interface';
import { Ejercicio } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { EJERCICIO } from '../metadata';

class EjerciciosCreator extends EntityCreator<IEjercicio> {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosCreator = new EjerciciosCreator();
