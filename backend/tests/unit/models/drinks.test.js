const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const {
  allDrinksMockFromDB,
  allDrinksCategoriesMockFromDB
} = require('./mocks/drinks.mock');
const {drinksModel} = require('../../../src/models/index')

describe('Testando Bebidas - MODEL', () => {
  it('Testando busca de todas as receitas de bebidas', async () => {
    sinon.stub(connection, 'execute').resolves([allDrinksMockFromDB])
    const allDrinks = await drinksModel.getAll();

    expect(allDrinks).to.be.an('array');
    expect(allDrinks).to.have.lengthOf(25);
  })

  it('Testando busca de todas as categórias de receitas de bebidas', async () => {
    sinon.stub(connection, 'execute').resolves([allDrinksCategoriesMockFromDB])
    const allDrinksCategories = await drinksModel.getAllCategories();

    expect(allDrinksCategories).to.be.an('array');
    expect(allDrinksCategories).to.have.lengthOf(11);
  })

  afterEach(() => {
    sinon.restore();
  })
})