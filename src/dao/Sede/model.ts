import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { SEDE } from './metadata';
import { ISede } from './interface';

type SedeCreationAttributes = Optional<ISede, 'id'>;

class Sede extends Model<ISede, SedeCreationAttributes> {}

Sede.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nombre: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      descripcion: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
      estado: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: SEDE.TABLE,
      timestamps: false,
      modelName: SEDE.TABLE,
      name: {
         plural: SEDE.PLURAL,
         singular: SEDE.SINGULAR,
      },
   },
);

export { Sede };
