import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IRecipe } from '../../interfaces/recipe/IRecipe';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRecipe>>('recipes', {
        id: {
          primaryKey: true,
          allowNull: false,
          type: DataTypes.INTEGER
        },
        strName: {
          field: 'str_name',
          allowNull: false,
          type: DataTypes.STRING
        },
        categoryId: {
          field: 'category_id',
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: "categories",
            key: "id"
          },
          onDelete: "CASCADE"
        },
        recipeType: {
          field: 'recipe_type',
          allowNull: false,
          type: DataTypes.STRING
        },
        strAlcoholic: {
          field: 'str_alcoholic',
          type: DataTypes.STRING
        },
        strGlass: {
          field: 'str_glass',
          type: DataTypes.STRING
        },
        strArea: {
          field: 'str_area',
          type: DataTypes.STRING
        },
        strInstructions: {
          field: 'str_instructions',
          allowNull: false,
          type: DataTypes.TEXT
        },
        strThumb: {
          field: 'str_thumb',
          type: DataTypes.STRING
        },
        strTags: {
          field: 'str_tags',
          type: DataTypes.STRING
        },
        strYoutube: {
          field: 'str_youtube',
          type: DataTypes.STRING
        },
      });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('recipes');
  },
};