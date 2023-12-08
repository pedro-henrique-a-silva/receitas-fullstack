const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'))

const { expect } = chai

const mealsMocks = require('./mocks/mealsMock')
const drinksMocks = require('./mocks/drinksMock')

const { Recipe, Category } = require('../../../src/models')

const { mealsService, drinksService } = require('../../../src/services');
const { afterEach, describe } = require('node:test');

describe("Tesando comidas - SERVICE", function () {

  it("Testando busca por todas as comidas", async function () {
    const recipeModel = sinon.stub(Recipe, 'findAll').resolves(mealsMocks.allMealsFromDB);
    const allMeals = await mealsService.getAll();

    expect(allMeals).to.be.deep.equal(mealsMocks.allMealsFromDB)
    expect(recipeModel).to.have.been.calledWith({where : {recipeType: 'meal'}})
  })

  it("Testando busca por todas as categórias de comidas", async function () {
    const recipeModel = sinon.stub(Category, 'findAll').resolves(mealsMocks.allMealsCategoryFromDB);
    const allMealsCategories = await mealsService.getAllCategories();

    expect(allMealsCategories).to.be.deep.equal(mealsMocks.allMealsCategoryFromDB)
    expect(recipeModel).to.have.been.calledWith({
      attributes: [ 'categoryName'],
      where : {categoryType: 'meal'}
    })
  })
  beforeEach(sinon.restore)
})

describe('Testando bebidas - SERVICE', function () {
  it("Testando busca por todas as bebidas", async function () {
    const recipeModel = sinon.stub(Recipe, 'findAll').resolves(drinksMocks.allDrinksFromDB);
    const allDrink = await drinksService.getAll();

    expect(allDrink).to.be.deep.equal(drinksMocks.allDrinksFromDB)
    expect(recipeModel).to.have.been.calledWith({where : {recipeType: 'drink'}})
  })

  it("Testando busca por todas as categórias de bebidas", async function () {
    const recipeModel = sinon.stub(Category, 'findAll').resolves(drinksMocks.allDrinksCategoryFromDB);
    const allDrinksCategories = await drinksService.getAllCategories();

    expect(allDrinksCategories).to.be.deep.equal(drinksMocks.allDrinksCategoryFromDB)
    expect(recipeModel).to.have.been.calledWith({
      attributes: [ 'categoryName'],
      where : {categoryType: 'drink'}
    })
  })
  beforeEach(sinon.restore)
})