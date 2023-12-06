const expect = require('chai').expect
const chai = require('chai')
chai.use(require('sinon-chai'))

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const usersModelProperties = [
  "id", "username", "password"
]

const UsersModel= require('../../../src/models/users.model')

describe('Testando users - MODEL', function() {

  it('Verificando nome da tabela e propriedades', function () {
    const Model = UsersModel(sequelize, dataTypes)
    const instance = new Model()

    checkModelName(Model)('Users')

    context('propriedades', () => {
      ;usersModelProperties.forEach(checkPropertyExists(instance))
    })
  })

})