import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeRecipe from './SequelizeRecipe';

class SequelizeIngredient extends Model<InferAttributes<SequelizeIngredient>,
InferCreationAttributes<SequelizeIngredient>> {
  declare id: CreationOptional<number>;
  declare recipeId: number;
  declare ingredient: string;
  declare order: number;
  declare measure: string;
}

SequelizeIngredient.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  recipeId: {
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
}, {
  sequelize: db,
  modelName: 'ingredients',
  timestamps: false,
  underscored: true,
});

SequelizeIngredient.belongsTo(SequelizeRecipe, { 
  foreignKey: 'recipeId', 
  as: 'recipe' 
});

export default SequelizeIngredient;