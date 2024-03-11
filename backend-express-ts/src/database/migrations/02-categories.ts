import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ICategory } from '../../interfaces/category/ICategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICategory>>('categories', {
      id: {
       allowNull: false,
       primaryKey: true,
       type: DataTypes.INTEGER,
     },
     categoryName: {
      field: 'category_name',
      allowNull: false,
      type: DataTypes.STRING,
     },
     categoryType: {
      field: 'category_type',
      allowNull: false,
      type: DataTypes.STRING,
     },
     });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('categories');
  },
};

