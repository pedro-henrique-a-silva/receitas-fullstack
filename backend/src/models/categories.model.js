module.exports = (sequelize, DataTypes) => {
  const categoriesModel = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
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
  },{
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  })

  return categoriesModel
}