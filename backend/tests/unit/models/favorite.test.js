const expect = require('chai').expect
const chai = require('chai')
chai.use(require('sinon-chai'))

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const favoritesModelProperties = [
  "idUser", "idRecipe"
]

const FavoriteModel= require('../../../src/models/favorites.model')

describe('Testando favorites - MODEL', function() {

  it('Verificando nome da tabela e propriedades', function () {
    const Model = FavoriteModel(sequelize, dataTypes)
    const instance = new Model()

    checkModelName(Model)('Favorite')

    context('propriedades', () => {
      ;favoritesModelProperties.forEach(checkPropertyExists(instance))
    })
  })
})