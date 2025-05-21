import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { RUTINA } from './metadata';
import { IRutina } from './interface';

type RutinaCreationAttributes = Optional<IRutina, 'id'>;

class Rutina extends Model<IRutina, RutinaCreationAttributes> {}

Rutina.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      socio_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      dia_semana: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      nombre: {
         type: DataTypes.STRING(100),
         allowNull: false,
      },
      objetivo: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
      observaciones: {
         type: DataTypes.STRING(250),
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: RUTINA.TABLE,
      timestamps: false,
      modelName: RUTINA.TABLE,
      name: {
         plural: RUTINA.PLURAL,
         singular: RUTINA.SINGULAR,
      },
   },
);

export { Rutina };
