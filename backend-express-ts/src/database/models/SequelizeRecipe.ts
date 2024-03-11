import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeRecipe extends Model<InferAttributes<SequelizeRecipe>,
InferCreationAttributes<SequelizeRecipe>> {
  declare id: CreationOptional<number>;
  declare strName: string;
  declare categoryId: number;
  declare recipeType: string;
  declare strAlcoholic: string;
  declare strGlass: string;
  declare strArea: string;
  declare strInstructions: string;
  declare strThumb: string;
  declare strTags: string;
  declare strYoutube: string;
}

SequelizeRecipe.init({
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  strName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  recipeType: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  strAlcoholic: {
    type: DataTypes.STRING,
  },
  strGlass: {
    type: DataTypes.STRING,
  },
  strArea: {
    type: DataTypes.STRING,
  },
  strInstructions: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  strThumb: {
    type: DataTypes.STRING,
  },
  strTags: {
    type: DataTypes.STRING,
  },
  strYoutube: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'recipes',
  timestamps: false,
  underscored: true,
});

export default SequelizeRecipe;
