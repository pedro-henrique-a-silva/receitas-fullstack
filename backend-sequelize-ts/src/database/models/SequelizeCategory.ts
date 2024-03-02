import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeRecipe from './SequelizeRecipe';

class SequelizeCategory extends Model<InferAttributes<SequelizeCategory>,
InferCreationAttributes<SequelizeCategory>> {
  declare id: CreationOptional<number>;
  declare categoryName: string;
  declare categoryType: string;
}

SequelizeCategory.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  categoryName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categoryType: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'categories',
  timestamps: false,
  underscored: true,
});

SequelizeCategory.hasMany(SequelizeRecipe, {
  foreignKey: 'categoryId',
  as: 'recipes',
});

SequelizeRecipe.belongsTo(SequelizeCategory, {
  foreignKey: 'categoryId',
  as: 'category',
});

export default SequelizeCategory;
