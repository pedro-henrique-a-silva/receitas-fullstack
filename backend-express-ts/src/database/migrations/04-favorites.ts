import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFavorite } from '../../interfaces/favorite/IFavorite';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFavorite>>('favorites', { 
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
    return queryInterface.dropTable('favorites');
  },
};
