import { Request, Response } from 'express';
import { dashboardServices } from './service';
import { success, error } from '../../../utils/network/responses';
import { PAGE_LIMIT } from '../../../abstractions/sequelizeBases/baseFind';
import { ActiveProcessDTO, ColaboratorsFilterDTO } from './dto';

export class DashboardController {
   async getActiveColaborators(req: Request, res: Response): Promise<void> {
      const filters: ColaboratorsFilterDTO = JSON.parse(JSON.stringify(req.query));
      const { page, pageSize, sortBy, sortDesc, onboardId } = filters;

      const userData = req.body.userData;
      await dashboardServices
         .getActiveColaborators(userData, onboardId, {
            page: page ? Number(page) : undefined,
            pageSize: pageSize ? Number(pageSize) : undefined,
            sortBy: sortBy,
            sortDesc: sortDesc,
         })
         .then((body) => {
            let pagination = {
               page: 1,
               limit: body.count < PAGE_LIMIT ? body.count : PAGE_LIMIT,
               total: body.count,
            };
            if (page && pageSize) {
               pagination = {
                  page: Number(page),
                  limit: Number(pageSize),
                  total: body.count,
               };
            }
            success({ req, res, body: body.rows, pagination });
         })
         .catch((err) => error({ req, res, body: err }));
   }

   async getActiveProcess(req: Request, res: Response): Promise<void> {
      const userData = req.body.userData;
      const filters: ActiveProcessDTO = JSON.parse(JSON.stringify(req.query));
      const { onboardId, done, target_done_at_from, target_done_at_to } = filters;

      await dashboardServices
         .getActiveProcess(userData, false, onboardId, done, target_done_at_from, target_done_at_to)
         .then((body) => success({ req, res, body }))
         .catch((err) => error({ req, res, body: err }));
   }

   async getCountActiveProcess(req: Request, res: Response): Promise<void> {
      const userData = req.body.userData;
      const filters: ActiveProcessDTO = JSON.parse(JSON.stringify(req.query));
      const { onboardId, done, target_done_at_from, target_done_at_to } = filters;

      await dashboardServices
         .getActiveProcess(userData, true, onboardId, done, target_done_at_from, target_done_at_to)
         .then((body) => success({ req, res, body }))
         .catch((err) => error({ req, res, body: err }));
   }
}
