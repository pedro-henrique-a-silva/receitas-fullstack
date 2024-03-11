import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUser } from '../../interfaces/user/IUser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>('users', {
      id: {
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
       type: DataTypes.INTEGER
     },
     name: {
       allowNull: false,
       type: DataTypes.STRING
     },
     username: {
       allowNull: false,
       type: DataTypes.STRING
     },
     password: {
       allowNull: false,
       type: DataTypes.STRING
     }
     });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};