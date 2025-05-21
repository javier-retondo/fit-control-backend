import { BaseRouter } from '../../../abstractions/baseRouter';
import { DashboardController } from './controller';
import { ColaboratorsFilterDTO } from './dto';
import { DashboardMiddleware } from './middleware';

const DASHBOARD_ROUTES = {
   SINGULAR: '/admin/dashboard',
   PLURAL: '/admin/dashboards',
};

export class DashboardRouter extends BaseRouter<
   DashboardController,
   DashboardMiddleware,
   typeof DASHBOARD_ROUTES
> {
   constructor() {
      super(DashboardController, DashboardMiddleware, DASHBOARD_ROUTES);
   }

   routes() {
      this.router
         .get(
            this.routesNames.SINGULAR + '/colaborators',
            this.middleware.verifyToken,
            this.middleware.validationMiddleware(ColaboratorsFilterDTO, 'query'),
            this.controller.getActiveColaborators,
         )
         .get(
            this.routesNames.SINGULAR + '/processes/count',
            this.middleware.verifyToken,
            this.controller.getCountActiveProcess,
         )
         .get(
            this.routesNames.SINGULAR + '/processes',
            this.middleware.verifyToken,
            this.controller.getActiveProcess,
         );
   }
}
