import { ISedeAssociations } from './interface';

export const sedeIncludes: {
   as: ISedeAssociations[keyof ISedeAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
