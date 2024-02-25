const expect = require('chai').expect
const chai = require('chai')
chai.use(require('sinon-chai'))

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const categoriesModelProperties = [
  "id", "categoryName", "categoryType"
]

const CategoriesModel= require('../../../src/models/categories.model')

describe('Testando categories - MODEL', function() {

  it('Verificando nome da tabela', function() {
    const Model = CategoriesModel(sequelize, dataTypes)
    const instance = new Model()

    checkModelName(Model)('Category')

    context('propriedades', () => {
      ;categoriesModelProperties.forEach(checkPropertyExists(instance))
    })
  })

})