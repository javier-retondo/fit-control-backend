import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { NOTIFICACION } from './metadata';
import { INotificacion } from './interface';

type NotificacionCreationAttributes = Optional<INotificacion, 'id'>;

class Notificacion extends Model<INotificacion, NotificacionCreationAttributes> {}

Notificacion.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      usuario_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      titulo: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      mensaje: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
      fecha: {
         type: DataTypes.DATE,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: NOTIFICACION.TABLE,
      timestamps: false,
      modelName: NOTIFICACION.TABLE,
      name: {
         plural: NOTIFICACION.PLURAL,
         singular: NOTIFICACION.SINGULAR,
      },
   },
);

export { Notificacion };
