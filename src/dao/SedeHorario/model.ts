import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { HORARIO_SEDE } from './metadata';
import { IHorarioSede } from './interface';

type HorarioSedeCreationAttributes = Optional<IHorarioSede, 'id'>;

class HorarioSede extends Model<IHorarioSede, HorarioSedeCreationAttributes> {}

HorarioSede.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      sede_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      dia_semana: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      horario: {
         type: DataTypes.TIME,
         allowNull: false,
      },
      feriado: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: HORARIO_SEDE.TABLE,
      timestamps: false,
      modelName: HORARIO_SEDE.TABLE,
      name: {
         plural: HORARIO_SEDE.PLURAL,
         singular: HORARIO_SEDE.SINGULAR,
      },
   },
);

export { HorarioSede };
