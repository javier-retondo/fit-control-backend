import { sequelize } from '../../../config';
import { departmentService } from '../../../dao/departments/service';
import { DEPARTMENT, PROCESS_DONE, PROCESSON, USER } from '../../../dao/metadata';
import { processDoneService } from '../../../dao/processDone/service';
import { processonService } from '../../../dao/processon/service';
import { userPagination, userService } from '../../../dao/users/service';
import { IUserDataResponse } from '../../../external/soofia/interfaces/users';
import { STATUS } from '../../../utils/constants/SYSTEM_ENUMS';

class DashboardServices {
   private async handleTransaction<T>(operation: (transaction: any) => Promise<T>): Promise<T> {
      const transaction = await sequelize.transaction();
      const result = await operation(transaction);
      await transaction.commit();
      return result;
   }

   async getActiveColaborators(
      userData: IUserDataResponse,
      onboardId?: number[],
      pagination?: userPagination,
   ) {
      const businessId = userData.business_ids[0];
      const departments = await departmentService.getDepartments(
         businessId,
         { onboarding_id: onboardId },
         undefined,
         [
            DEPARTMENT.COLUMNS.ID,
            DEPARTMENT.ASSOCIATIONS.BUSSINES,
            DEPARTMENT.ASSOCIATIONS.ONBOARDINGS,
         ],
         false,
         true,
      );

      const onboardingDays = departments.rows[0].bussines?.onboarding_days;

      const users = await userService.getUsers(
         businessId,
         {
            department_id: departments.rows.map((department) => department.id as number),
            onboardingDays,
         },
         pagination,
         [
            USER.COLUMNS.ID,
            USER.COLUMNS.LAST_NAME,
            USER.COLUMNS.FIRST_NAME,
            USER.COLUMNS.DATE_OF_ENTRY,
            USER.ASSOCIATIONS.DEPARTMENTS,
         ],
         false,
         true,
      );

      return {
         rows: users.rows.map((user) => ({
            ...user,
            onboardings: departments.rows
               .filter((department) => user.departments?.some((dep) => dep.id === department.id))
               .map((department) => department.onboardings),
         })),
         count: users.count,
      };
   }

   async getActiveProcess(
      userData: IUserDataResponse,
      count: boolean,
      onboardId?: number[],
      done?: boolean,
      target_done_at_from?: Date,
      target_done_at_to?: Date,
   ) {
      const { business_ids } = userData;
      const businessId = business_ids[0];
      const processOn = await processonService.getProcessOn(
         businessId,
         {
            status: STATUS.ACTIVE,
            onboarding_id: onboardId,
         },
         undefined,
         [PROCESSON.COLUMNS.ID, PROCESSON.COLUMNS.DESCRIPTION],
         false,
         true,
      );
      const processDone = await processDoneService.getProcessDone(
         processOn.rows.map((process) => process.id as number),
         {
            status: STATUS.ACTIVE,
            done,
            target_done_at_from,
            target_done_at_to,
         },
         undefined,
         count
            ? [PROCESS_DONE.COLUMNS.ID, PROCESS_DONE.COLUMNS.PROCESS_ON_ID]
            : [
                 PROCESS_DONE.COLUMNS.ID,
                 PROCESS_DONE.COLUMNS.PROCESS_ON_ID,
                 PROCESS_DONE.COLUMNS.CREATED_AT,
                 PROCESS_DONE.COLUMNS.TARGET_DONE,
                 PROCESS_DONE.COLUMNS.TARGET_DONE_AT,
                 PROCESS_DONE.ASSOCIATIONS.USER,
              ],
         false,
         true,
      );

      return processOn.rows.map((process) => ({
         ...process,
         users: count
            ? undefined
            : processDone.rows
                 .filter((processDone) => processDone.processon_id === process.id)
                 .map((processDone) => {
                    const user = JSON.parse(JSON.stringify(processDone.user));
                    return {
                       ...user,
                       created_at: processDone.created_at,
                       target_done: processDone.target_done,
                       target_done_at: processDone.target_done_at,
                       process_done_id: processDone.id,
                    };
                 }),
         count: count
            ? processDone.rows.filter((processDone) => processDone.processon_id === process.id)
                 .length
            : undefined,
      }));
   }
}

const dashboardServices = new DashboardServices();
export { dashboardServices };
