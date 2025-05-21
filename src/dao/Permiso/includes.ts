import { IPermisoAssociations } from './interface';

export const permisoIncludes: {
   as: IPermisoAssociations[keyof IPermisoAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
