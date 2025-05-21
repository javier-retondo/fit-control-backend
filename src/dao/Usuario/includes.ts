import { IUsuarioAssociations } from './interface';

export const UsuarioIncludes: {
   as: IUsuarioAssociations[keyof IUsuarioAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
