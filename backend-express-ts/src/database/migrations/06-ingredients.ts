import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IIngredient } from '../../interfaces/ingredient/IIngredient';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IIngredient>>('ingredients', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      recipeId: {
        field: 'recipe_id',
        allowNull: false,
        references: {
          model: "recipes",
          key: "id"
        },
        type: DataTypes.INTEGER,
      },
      ingredient: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      measure: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('ingredients');
  },
};
