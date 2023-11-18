const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const {allDrinksMockFromDB} = require('./mocks/drinks.mock');
const {drinksModel} = require('../../../src/models/index')

describe('Testando Bebidas - MODEL', () => {
  it('Testando busca de todas as bebidas', async () => {
    sinon.stub(connection, 'execute').resolves([allDrinksMockFromDB])
    const allDrinks = await drinksModel.getAll();

    expect(allDrinks).to.be.an('array');
    expect(allDrinks).to.have.lengthOf(25);
  })

  afterEach(() => {
    sinon.restore();
  })
})