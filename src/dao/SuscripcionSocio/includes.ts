import { ISocioSuscripcionAssociations } from './interface';

export const sociosuscripcionIncludes: {
   as: ISocioSuscripcionAssociations[keyof ISocioSuscripcionAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
