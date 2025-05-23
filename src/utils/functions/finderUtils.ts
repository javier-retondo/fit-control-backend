import { FindAttributeOptions, Includeable } from 'sequelize';
import { IncludeItem } from '../../abstractions/includes';

export function paginationHelper<TInterfaz>(props: {
   page?: number;
   pageSize?: number;
   sort: { column: keyof TInterfaz; direction: 'ASC' | 'DESC' }[];
}): {
   offset: number;
   limit: number;
   order: [string, 'ASC' | 'DESC'][];
} {
   const { page = 1, pageSize = 10000, sort } = props;
   const offset = (page - 1) * pageSize;
   const limit = pageSize;

   const order: [string, 'ASC' | 'DESC'][] =
      sort?.map((item) => {
         return [item.column as string, item.direction];
      }) || [];

   return { offset, limit, order };
}

export function getIncludes<TInterfaz>(
   includes?: (keyof TInterfaz)[],
   associations?: IncludeItem[],
   columns?: { [key: string]: string },
): { include: Includeable[]; attributes: FindAttributeOptions } {
   const include =
      includes && associations
         ? Object.values(associations).filter(
              (include) => includes && includes.includes(include.as as keyof TInterfaz),
           )
         : [];
   const attributes =
      includes && columns
         ? Object.values(columns).filter(
              (column) => includes && includes.includes(column as keyof TInterfaz),
           )
         : [];

   return {
      include,
      attributes,
   };
}

export type pagination<T> = {
   page: number;
   pageSize: number;
   sort: {
      column: keyof T;
      direction: 'ASC' | 'DESC';
   }[];
};
