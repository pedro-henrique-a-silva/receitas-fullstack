module.exports = (sequelize, DataTypes) => {
  const favoriteModel = sequelize.define('Favorite', {
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
    tableName: 'favorites',
    timestamps: false,
    underscored: true,
  })

  favoriteModel.associate = (models) => {
    models.User.belongsToMany(models.Recipe, {
      through: favoriteModel,
      foreignKey: "idUser",
      otherKey: "idRecipe",
      as: "recipes"
    })

    models.Recipe.belongsToMany(models.User, {
      through: favoriteModel,
      foreignKey: "idRecipe",
      otherKey: "idUser",
      as: "users"
    })
  }

  return favoriteModel
}