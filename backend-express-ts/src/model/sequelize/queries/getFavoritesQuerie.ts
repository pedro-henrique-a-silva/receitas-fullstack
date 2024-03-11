import SequelizeRecipe from '../../../database/models/SequelizeRecipe';
import SequelizeCategory from '../../../database/models/SequelizeCategory';

export default (id: number) => ({
  attributes: ['id', 'name', 'username'],
  include: [
    {
      model: SequelizeRecipe,
      through: { attributes: [] },
      as: 'favoriteRecipes',
      include: [
        { model: SequelizeCategory, as: 'category', attributes: ['categoryName'] },
      ],
    },
  ],
  where: { id },
});
