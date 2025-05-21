import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { HORARIO_CLASE } from './metadata';
import { IHorarioClase } from './interface';

type HorarioClaseCreationAttributes = Optional<IHorarioClase, 'id'>;

class HorarioClase extends Model<IHorarioClase, HorarioClaseCreationAttributes> {}

HorarioClase.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      clase_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      instructor_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      dia_semana: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
      horario: {
         type: DataTypes.TIME,
         allowNull: false,
      },
      sede_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: HORARIO_CLASE.TABLE,
      timestamps: false,
      modelName: HORARIO_CLASE.TABLE,
      name: {
         plural: HORARIO_CLASE.PLURAL,
         singular: HORARIO_CLASE.SINGULAR,
      },
   },
);

export { HorarioClase };
