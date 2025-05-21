import { Ejercicio } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { EJERCICIO } from '../metadata';

class EjerciciosDeleter extends EntityDeleter {
   model = Ejercicio;
   entityName = EJERCICIO.SINGULAR;
}

export const ejerciciosDeleter = new EjerciciosDeleter();
