import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config';
import { USUARIO } from './metadata';
import { IUsuario } from './interface';
import { EPerfil } from '../Perfil/interface';

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
         allowNull: true,
      },
      avatar_url: {
         type: DataTypes.STRING(250),
         allowNull: true,
      },
      password: {
         type: DataTypes.STRING(255),
         allowNull: false,
      },
      usuario: {
         type: DataTypes.STRING(50),
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
         allowNull: true,
      },
      dni: {
         type: DataTypes.STRING(20),
         allowNull: true,
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
      scopes: {
         socio: { where: { superadmin: false, perfil_id: EPerfil.SOCIO } },
         administrador: { where: { superadmin: false, perfil_id: EPerfil.ADMINISTRADOR } },
         recepcionista: { where: { superadmin: false, perfil_id: EPerfil.RECEPCIONISTA } },
         instructor: { where: { superadmin: false, perfil_id: EPerfil.INSTRUCTOR } },
         coordinador: { where: { superadmin: false, perfil_id: EPerfil.COORDINADOR } },
         superadmin: { where: { superadmin: true } },
      },
   },
);
const Socio = Usuario.scope('socio');
const Administrador = Usuario.scope('administrador');
const Recepcionista = Usuario.scope('recepcionista');
const Instructor = Usuario.scope('instructor');
const Coordinador = Usuario.scope('coordinador');
const Superadmin = Usuario.scope('superadmin');

export { Usuario, Socio, Administrador, Recepcionista, Instructor, Coordinador, Superadmin };
