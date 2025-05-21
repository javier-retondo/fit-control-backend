import { IMedioPagoAssociations } from './interface';

export const mediopagoIncludes: {
   as: IMedioPagoAssociations[keyof IMedioPagoAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
