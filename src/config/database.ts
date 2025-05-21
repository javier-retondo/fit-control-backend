import { Sequelize } from 'sequelize';
import { ConfigServer } from './environment';

export const sequelize = new Sequelize(
   ConfigServer.prototype.dbConnection.database || '',
   ConfigServer.prototype.dbConnection.user || '',
   ConfigServer.prototype.dbConnection.password || '',
   {
      dialect: 'postgres',
      host: ConfigServer.prototype.dbConnection.host,
      port: ConfigServer.prototype.dbConnection.port,
      logging: true,
   },
);
