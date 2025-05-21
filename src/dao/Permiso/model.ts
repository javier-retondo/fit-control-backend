import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { PERMISO } from './metadata';
import { IPermiso } from './interface';

type PermisoCreationAttributes = Optional<IPermiso, 'id'>;

class Permiso extends Model<IPermiso, PermisoCreationAttributes> {}

Permiso.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      modulo_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      perfil_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: PERMISO.TABLE,
      timestamps: false,
      modelName: PERMISO.TABLE,
      name: {
         plural: PERMISO.PLURAL,
         singular: PERMISO.SINGULAR,
      },
   },
);

export { Permiso };
