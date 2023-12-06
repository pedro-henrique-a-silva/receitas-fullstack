const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'))

const { expect } = chai

const mealsMocks = require('./mocks/mealsMock')
const drinksMocks = require('./mocks/drinksMock')

const { Recipe } = require('../../../src/models')

const { mealsService, drinksService } = require('../../../src/services');
const { afterEach } = require('node:test');

describe("Tesando recipes - SERVICE", function () {

  it("Testando busca por todas as comidas", async function () {
    const recipeModel = sinon.stub(Recipe, 'findAll').resolves(mealsMocks.allMealsFromDB);
    const allMeals = await mealsService.getAll();

    expect(allMeals).to.be.deep.equal(mealsMocks.allMealsFromDB)
    expect(recipeModel).to.have.been.calledWith({where : {recipeType: 'meal'}})
  })

  it("Testando busca por todas as bebidas", async function () {
    const recipeModel = sinon.stub(Recipe, 'findAll').resolves(drinksMocks.allDrinksFromDB);
    const allDrink = await drinksService.getAll();

    expect(allDrink).to.be.deep.equal(drinksMocks.allDrinksFromDB)
    expect(recipeModel).to.have.been.calledWith({where : {recipeType: 'drink'}})
  })

  beforeEach(sinon.restore)
})