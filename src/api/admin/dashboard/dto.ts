import { Transform, Type } from 'class-transformer';
import { IsInt, IsPositive, IsOptional, IsBoolean, IsEnum, IsArray, IsDate } from 'class-validator';
import { USER } from '../../../dao/metadata';

export enum DashboardOrder {
   ID = 'id',
   USERNAME = 'first_name',
   DATE_OF_ENTRY = 'date_of_entry',
}

const dashboardSortedByMap: Record<string, string> = {
   [DashboardOrder.ID]: USER.COLUMNS.ID,
   [DashboardOrder.USERNAME]: USER.COLUMNS.FIRST_NAME,
   [DashboardOrder.DATE_OF_ENTRY]: USER.COLUMNS.DATE_OF_ENTRY,
};

export class ColaboratorsFilterDTO {
   @IsInt()
   @IsPositive()
   @IsOptional()
   @Type(() => Number)
   public page?: number;

   @IsInt()
   @IsPositive()
   @IsOptional()
   @Type(() => Number)
   public pageSize?: number;

   @IsEnum(DashboardOrder)
   @IsOptional()
   @Transform(({ value }) => dashboardSortedByMap[value] || value)
   public sortBy?: DashboardOrder;

   @IsBoolean()
   @IsOptional()
   @Transform(({ value }) => value === 'true')
   public sortDesc?: boolean;

   @IsArray()
   @IsOptional()
   @Transform(({ value }) => {
      console.log(value);
      return value ? value.split(',').map((id: string) => parseInt(id, 10)) : undefined;
   })
   @IsInt({ each: true })
   @IsPositive({ each: true })
   public onboardId?: number[];

   constructor(
      page?: number,
      pageSize?: number,
      sortBy?: DashboardOrder,
      sortDesc?: boolean,
      onboardId?: number[],
   ) {
      this.page = page;
      this.pageSize = pageSize;
      this.sortBy = sortBy;
      this.sortDesc = sortDesc;
      this.onboardId = onboardId;
   }
}

export class ActiveProcessDTO {
   @IsArray()
   @IsOptional()
   @Transform(({ value }) => {
      console.log(value);
      return value ? value.split(',').map((id: string) => parseInt(id, 10)) : undefined;
   })
   @IsInt({ each: true })
   @IsPositive({ each: true })
   public onboardId?: number[];

   @IsBoolean()
   @IsOptional()
   @Transform(({ value }) => (value === 'true' ? true : value === 'false' ? false : undefined))
   public done?: boolean;

   @IsDate()
   @IsOptional()
   @Transform(({ value }) => {
      if (value) {
         const date = new Date(value);
         date.setHours(0, 0, 0, 0);
         return date;
      }
      return undefined;
   })
   @Type(() => Date)
   public target_done_at_from?: Date;

   @IsDate()
   @IsOptional()
   @Transform(({ value }) => {
      if (value) {
         const date = new Date(value);
         date.setHours(23, 59, 59, 999);
         return date;
      }
      return undefined;
   })
   @Type(() => Date)
   public target_done_at_to?: Date;

   constructor(
      onboardId?: number[],
      done?: boolean,
      target_done_at_from?: Date,
      target_done_at_to?: Date,
   ) {
      this.onboardId = onboardId;
      this.done = done;
      this.target_done_at_from = target_done_at_from;
      this.target_done_at_to = target_done_at_to;
   }
}
