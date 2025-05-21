import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { MODULO } from './metadata';
import { IModulo } from './interface';

type ModuloCreationAttributes = Optional<IModulo, 'id'>;

class Modulo extends Model<IModulo, ModuloCreationAttributes> {}

Modulo.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nombre: {
         type: DataTypes.STRING(100),
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: MODULO.TABLE,
      timestamps: false,
      modelName: MODULO.TABLE,
      name: {
         plural: MODULO.PLURAL,
         singular: MODULO.SINGULAR,
      },
   },
);

export { Modulo };
