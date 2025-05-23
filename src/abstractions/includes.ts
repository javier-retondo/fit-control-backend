import { Model, ModelStatic } from 'sequelize';

export type IncludeItem = {
   model: ModelStatic<Model>;
   as: string;
   attributes: string[];
   include?: IncludeItem[];
   required?: boolean;
   separate?: boolean;
   through?: {
      attributes: string[];
   };
};

export function createInclude<
   TModel extends Model,
   TInterface extends Record<string, any>,
   TAssociation extends Record<string, string>,
>(
   model: ModelStatic<TModel>,
   as: TAssociation[keyof TAssociation],
   attributes: (keyof TInterface & string)[],
   nestedIncludes?: IncludeItem[],
   required?: boolean,
   separate?: boolean,
   through?: boolean,
): IncludeItem {
   const includeItem: IncludeItem = {
      model,
      as: as as string,
      attributes,
      required: required ?? false,
      separate: separate ?? false,
      through: through
         ? {
              attributes: [],
           }
         : undefined,
   };

   if (nestedIncludes?.length) {
      includeItem.include = nestedIncludes;
   }

   return includeItem;
}
