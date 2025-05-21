import { IReservaAssociations } from './interface';

export const reservaIncludes: {
   as: IReservaAssociations[keyof IReservaAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
