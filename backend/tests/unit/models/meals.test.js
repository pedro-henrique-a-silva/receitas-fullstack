const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const {allMealsMockFromDB} = require('./mocks/meals.mock');
const {mealsModel} = require('../../../src/models/index')

describe('Testando Meals - MODEL', () => {
  it('Testando busca de todas as comidas', async () => {
    sinon.stub(connection, 'execute').resolves([allMealsMockFromDB])
    const allMeals = await mealsModel.getAll();

    expect(allMeals).to.be.an('array');
    expect(allMeals).to.have.lengthOf(25);
  })

  afterEach(() => {
    sinon.restore();
  })
})