import { IRutinaAssociations } from './interface';

export const rutinaIncludes: {
   as: IRutinaAssociations[keyof IRutinaAssociations];
   attributes: string[];
   include?: {
      as: string;
      attributes: string[];
   }[];
}[] = [];
