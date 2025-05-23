import { FichaMedica } from '../model';
import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
import { FICHA_MEDICA } from '../metadata';

class FichasMedicasDeleter extends EntityDeleter {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasDeleter = new FichasMedicasDeleter();
