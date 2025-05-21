import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { SUSCRIPCION } from './metadata';
import { ISuscripcion } from './interface';

type SuscripcionCreationAttributes = Optional<ISuscripcion, 'id'>;

class Suscripcion extends Model<ISuscripcion, SuscripcionCreationAttributes> {}

Suscripcion.init(
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
      vigencia_desde: {
         type: DataTypes.DATEONLY,
         allowNull: false,
      },
      vigencia_hasta: {
         type: DataTypes.DATEONLY,
         allowNull: false,
      },
      estado: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      anual: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      importe: {
         type: DataTypes.DOUBLE,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: SUSCRIPCION.TABLE,
      timestamps: false,
      modelName: SUSCRIPCION.TABLE,
      name: {
         plural: SUSCRIPCION.PLURAL,
         singular: SUSCRIPCION.SINGULAR,
      },
   },
);

export { Suscripcion };
