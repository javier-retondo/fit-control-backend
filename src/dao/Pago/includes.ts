import { IPagoAssociations } from './interface';

export const pagoIncludes: {
   as: IPagoAssociations[keyof IPagoAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
