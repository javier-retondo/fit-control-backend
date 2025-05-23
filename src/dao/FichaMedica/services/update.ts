import { IFichaMedica } from '../interface';
import { FichaMedica } from '../model';
import { FICHA_MEDICA } from '../metadata';
import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

class FichasMedicasUpdater extends EntityUpdater<IFichaMedica> {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasUpdater = new FichasMedicasUpdater();
