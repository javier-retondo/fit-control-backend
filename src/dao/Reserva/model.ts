import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { RESERVA } from './metadata';
import { IReserva } from './interface';

type ReservaCreationAttributes = Optional<IReserva, 'id'>;

class Reserva extends Model<IReserva, ReservaCreationAttributes> {}

Reserva.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      clase_programada_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      socio_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      fecha: {
         type: DataTypes.DATE,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: RESERVA.TABLE,
      timestamps: false,
      modelName: RESERVA.TABLE,
      name: {
         plural: RESERVA.PLURAL,
         singular: RESERVA.SINGULAR,
      },
   },
);

export { Reserva };
