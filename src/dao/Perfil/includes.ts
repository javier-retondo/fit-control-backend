import { IPerfilAssociations } from './interface';

export const perfilIncludes: {
   as: IPerfilAssociations[keyof IPerfilAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
