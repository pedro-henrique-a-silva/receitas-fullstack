import * as sinon from 'sinon';
import * as chai from 'chai';
import SequelizeRecipe from '../../../src/database/models/SequelizeRecipe';
import recipesMocks from '../../mocks/recipe.mock';
import RecipeModel from '../../../src/model/sequelize/RecipeModel';
import SequelizeCategory from '../../../src/database/models/SequelizeCategory';
import SequelizeIngredient from '../../../src/database/models/SequelizeIngredient';

const { expect } = chai;

describe('Testando Recipes - MODEL', function() {
  beforeEach(function () { sinon.restore(); });

  it('Verifica busca por tods receitas de comida', async function () {
    const mockAllRecipeFromDB = SequelizeRecipe.bulkBuild(
      recipesMocks.allMealsFromDB,
      {
        include: [
          { model: SequelizeCategory, as: 'category', attributes: ['categoryName'] },
          {
            model: SequelizeIngredient,
            as: 'ingredients',
            attributes: ['ingredient', 'measure'],
            order: [['strName', 'ASC']],
          },
        ],
      }
    );

    sinon.stub(SequelizeRecipe, 'findAll').resolves(mockAllRecipeFromDB);
    
    const userModel = new RecipeModel();
    const user = await userModel.findAll('meal');

    expect(user).to.be.not.null;
    expect(user).to.be.an('array');
    expect(user).to.have.lengthOf(mockAllRecipeFromDB.length);
  })

})