const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'))

const { expect } = chai

const { User } = require('../../../src/models')

const { userService } = require('../../../src/services');

describe('Testando User - SERVICE', async function () {
  beforeEach(() => sinon.restore());
  it("Testando falha no login de usuário", async function () {
    const userModel = sinon.stub(User, 'findOne').resolves(null);

    const login = await userService.login({
      username: "userInvalido@email.com",
      password: "senha invalida"
    })

    expect(login).to.be.deep.equal({status: "INVALID_DATA", message: "Dados incorretos"})
  })
})