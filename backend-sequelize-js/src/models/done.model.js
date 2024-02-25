module.exports = (sequelize, DataTypes) => {
  const doneModel = sequelize.define('Done', {
    idUser: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE', 
    },
    idRecipe: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'id',
      },
      onDelete: 'CASCADE', 
    },
  },{
    tableName: 'done',
    timestamps: false,
    underscored: true,
  })

  doneModel.associate = (models) => {
    models.User.belongsToMany(models.Recipe, {
      through: doneModel,
      foreignKey: "idUser",
      otherKey: "idRecipe",
      as: "recipesDone"
    })

    models.Recipe.belongsToMany(models.User, {
      through: doneModel,
      foreignKey: "idRecipe",
      otherKey: "idUser",
      as: "usersDone"
    })
  }

  return doneModel
}