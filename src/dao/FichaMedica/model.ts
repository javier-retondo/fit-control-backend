import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { FICHA_MEDICA } from './metadata';
import { IFichaMedica } from './interface';

type FichaMedicaCreationAttributes = Optional<IFichaMedica, 'id'>;

class FichaMedica extends Model<IFichaMedica, FichaMedicaCreationAttributes> {}

FichaMedica.init(
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
      grupo_sanguineo: {
         type: DataTypes.STRING(5),
         allowNull: false,
      },
      factor: {
         type: DataTypes.STRING(10),
         allowNull: false,
      },
      alergias: {
         type: DataTypes.STRING(155),
         allowNull: false,
      },
      lesiones: {
         type: DataTypes.STRING(155),
         allowNull: false,
      },
      medicacion: {
         type: DataTypes.STRING(155),
         allowNull: false,
      },
      restricciones: {
         type: DataTypes.STRING(255),
         allowNull: false,
      },
      observaciones: {
         type: DataTypes.STRING(255),
         allowNull: false,
      },
      updated_at: {
         type: DataTypes.DATE,
         allowNull: false,
      },
      updated_by: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: FICHA_MEDICA.TABLE,
      timestamps: false,
      modelName: FICHA_MEDICA.TABLE,
      name: {
         plural: FICHA_MEDICA.PLURAL,
         singular: FICHA_MEDICA.SINGULAR,
      },
   },
);

export { FichaMedica };
