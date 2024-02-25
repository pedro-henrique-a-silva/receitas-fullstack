module.exports = (sequelize, DataTypes) => {
  const usersModel = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },{
    tableName: 'users',
    timestamps: false,
    underscored: true,
  })

  return usersModel
}