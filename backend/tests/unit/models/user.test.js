const { expect } = require('chai');
const sinon = require('sinon');
const {userByUsernameMockFromDB} = require('./mocks/users.mock');
const connection = require('../../../src/models/connection');
const {usersModel} = require('../../../src/models/index')

describe('Testando usuários - MODEL', function() {
  it('Testando pesquisa de usuário por email', async function() {
    sinon.stub(connection, "execute").resolves([[userByUsernameMockFromDB]])
    const user = await usersModel.getUserByUsername('email@email.com');

    expect(user).to.have.property('username');
    expect(user).to.have.property('password');
    expect(user.username).to.be.equal('email@email.com');
  })
})