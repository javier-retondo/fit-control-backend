import { IFichaMedica } from '../interface';
import { FichaMedica } from '../model';
import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
import { FICHA_MEDICA } from '../metadata';

class FichasMedicasCreator extends EntityCreator<IFichaMedica> {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasCreator = new FichasMedicasCreator();
