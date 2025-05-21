import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { PAGO } from './metadata';
import { IPago } from './interface';

type PagoCreationAttributes = Optional<IPago, 'id'>;

class Pago extends Model<IPago, PagoCreationAttributes> {}

Pago.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      suscripcion_socio_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      monto: {
         type: DataTypes.DOUBLE,
         allowNull: false,
      },
      fecha: {
         type: DataTypes.DATE,
         allowNull: false,
      },
      medio_pago_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: PAGO.TABLE,
      timestamps: false,
      modelName: PAGO.TABLE,
      name: {
         plural: PAGO.PLURAL,
         singular: PAGO.SINGULAR,
      },
   },
);

export { Pago };
