import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { USUARIO } from './metadata';
import { IUsuario } from './interface';

type UsuarioCreationAttributes = Optional<IUsuario, 'id'>;

class Usuario extends Model<IUsuario, UsuarioCreationAttributes> {}

Usuario.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nombre: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
      apellido: {
         type: DataTypes.STRING(150),
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING(250),
         allowNull: false,
      },
      telefono: {
         type: DataTypes.STRING(20),
         allowNull: false,
      },
      avatar_url: {
         type: DataTypes.STRING(250),
         allowNull: true,
      },
      password: {
         type: DataTypes.STRING(255),
         allowNull: false,
      },
      pass_provisoria: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      superadmin: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      perfil_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: sequelize,
      tableName: USUARIO.TABLE,
      timestamps: false,
      modelName: USUARIO.TABLE,
      name: {
         plural: USUARIO.PLURAL,
         singular: USUARIO.SINGULAR,
      },
   },
);

export { Usuario };
