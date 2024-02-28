import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

import SequelizeUser from './SequelizeUser';
import SequelizeRecipe from './SequelizeRecipe';

class SequelizeFavorite extends Model<InferAttributes<SequelizeFavorite>,
InferCreationAttributes<SequelizeFavorite>> {
  declare userId: string;
  declare recipeId: string;
}

SequelizeFavorite.init({
  userId: {
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
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'recipes',
      key: 'id',
    },
    onDelete: 'CASCADE', 
  },
}, {
  sequelize: db,
  modelName: 'favorites',
  timestamps: false,
  underscored: true,
});

SequelizeUser.belongsToMany(SequelizeRecipe, {
  through: SequelizeFavorite,
  foreignKey: "userId",
  otherKey: "recipeId",
  as: "recipes"
});

SequelizeRecipe.belongsToMany(SequelizeUser, {
  through: SequelizeFavorite,
  foreignKey: "recipeId",
  otherKey: "userId",
  as: "users"
});

export default SequelizeFavorite;
