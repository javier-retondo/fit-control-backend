import { Request } from 'express';

export type ISessionData = {
   Use_Token: string;
   Usu_Id: number;
   Emp_Id: number;
};

export type IUserMenu = {
   Men_Id: number;
   Men_Nombre: string;
   Men_Padre_Id: number;
};

export type CustomRequestBody = {
   body: Record<string, string | string[] | undefined>;
} & Request;

export type IMetadata<TColumns, TAssociations> = {
   TABLE: string;
   COLUMNS: TColumns;
   PLURAL: string;
   SINGULAR: string;
   ASSOCIATIONS: TAssociations;
};
