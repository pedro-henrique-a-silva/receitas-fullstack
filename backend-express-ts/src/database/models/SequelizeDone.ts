import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

import SequelizeUser from './SequelizeUser';
import SequelizeRecipe from './SequelizeRecipe';

class SequelizeDone extends Model<InferAttributes<SequelizeDone>,
InferCreationAttributes<SequelizeDone>> {
  declare userId: number;
  declare recipeId: number;
}

SequelizeDone.init({
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
  modelName: 'dones',
  timestamps: false,
  underscored: true,
});

SequelizeUser.belongsToMany(SequelizeRecipe, {
  through: SequelizeDone,
  foreignKey: 'userId',
  otherKey: 'recipeId',
  as: 'doneRecipes',
});

SequelizeRecipe.belongsToMany(SequelizeUser, {
  through: SequelizeDone,
  foreignKey: 'recipeId',
  otherKey: 'userId',
  as: 'usersDone',
});

export default SequelizeDone;
