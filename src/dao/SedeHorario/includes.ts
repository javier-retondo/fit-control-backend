import { IHorarioSedeAssociations } from './interface';

export const horariosedeIncludes: {
   as: IHorarioSedeAssociations[keyof IHorarioSedeAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
