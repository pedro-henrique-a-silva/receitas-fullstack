const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const {allFavoritesMockFromDB} = require('./mocks/favorites.mock');
const {favoritesModel} = require('../../../src/models/index')

describe('Testando Favoritos - MODEL', function() {
  it('Testando se retorna todas as receitas favoritas de um usuário.',async function() {
    sinon.stub(connection, 'execute').resolves([allFavoritesMockFromDB])
    const allFavorites = await favoritesModel.getAll(1);
    expect(allFavorites).to.be.an('array');
    expect(allFavorites).to.have.lengthOf(2);
  })

  afterEach(() => {
    sinon.restore();
  })
});