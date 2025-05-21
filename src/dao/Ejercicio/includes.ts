import { IEjercicioAssociations } from './interface';

export const ejercicioIncludes: {
   as: IEjercicioAssociations[keyof IEjercicioAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
