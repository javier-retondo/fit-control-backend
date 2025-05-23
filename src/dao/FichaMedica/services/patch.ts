import { IFichaMedica } from '../interface';
import { FichaMedica } from '../model';
import { FICHA_MEDICA } from '../metadata';
import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

class FichasMedicasPatcher extends EntityPatcher<IFichaMedica> {
   model = FichaMedica;
   entityName = FICHA_MEDICA.SINGULAR;
}

export const fichasMedicasPatcher = new FichasMedicasPatcher();
