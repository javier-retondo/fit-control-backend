import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { CLASE } from './metadata';
import { IClase } from './interface';

type ClaseCreationAttributes = Optional<IClase, 'id'>;

class Clase extends Model<IClase, ClaseCreationAttributes> {}

Clase.init(
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
      descripcion: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: CLASE.TABLE,
      timestamps: false,
      modelName: CLASE.TABLE,
      name: {
         plural: CLASE.PLURAL,
         singular: CLASE.SINGULAR,
      },
   },
);

export { Clase };
