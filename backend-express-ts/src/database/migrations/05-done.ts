import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IDones } from '../../interfaces/dones/IDones';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDones>>('dones', { 
      userId: {
        field: 'user_id',
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      recipeId: {
        field: 'recipe_id',
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'recipes',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('dones');
  },
};
