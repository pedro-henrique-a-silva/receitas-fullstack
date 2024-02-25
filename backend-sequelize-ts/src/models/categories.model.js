module.exports = (sequelize, DataTypes) => {
  const categoriesModel = sequelize.define('Category', {
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
  },{
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  })

  categoriesModel.associate = (models) => {
    categoriesModel.hasOne(models.Recipe, {
      foreignKey: 'idCategory',
      as: 'category'
    })
  }

  return categoriesModel
}