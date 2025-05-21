import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { EJERCICIO } from './metadata';
import { IEjercicio } from './interface';

type EjercicioCreationAttributes = Optional<IEjercicio, 'id'>;

class Ejercicio extends Model<IEjercicio, EjercicioCreationAttributes> {}

Ejercicio.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      rutina_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      nombre: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      video_url: {
         type: DataTypes.STRING(255),
         allowNull: false,
      },
      descripcion: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: EJERCICIO.TABLE,
      timestamps: false,
      modelName: EJERCICIO.TABLE,
      name: {
         plural: EJERCICIO.PLURAL,
         singular: EJERCICIO.SINGULAR,
      },
   },
);

export { Ejercicio };
