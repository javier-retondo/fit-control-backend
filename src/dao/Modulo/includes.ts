import { IModuloAssociations } from './interface';

export const moduloIncludes: {
   as: IModuloAssociations[keyof IModuloAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
