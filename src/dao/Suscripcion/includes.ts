import { ISuscripcionAssociations } from './interface';

export const suscripcionIncludes: {
   as: ISuscripcionAssociations[keyof ISuscripcionAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
