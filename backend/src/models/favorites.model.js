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

  return favoriteModel
}