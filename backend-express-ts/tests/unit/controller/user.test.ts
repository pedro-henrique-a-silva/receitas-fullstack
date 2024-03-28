import * as sinon from 'sinon';
import * as chai from 'chai';
const sinonChai = require('sinon-chai');
import { Request, Response } from 'express';
import UserService from '../../../src/services/UserService';
import userMock from '../../mocks/user.mock';
import UserController from '../../../src/controllers/UserController';

const { expect } = chai;
chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Should Return status 200 and token when user is found', async function () {
    const userController = new UserController();

    sinon.stub(UserService.prototype, 'findByUsername').resolves(userMock.userLoginServiceSuccess)

    req.body = {
      username: "email2@email.com",
      password: "123456"
    };

    await userController.login(req, res)

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith({ token: 'token'})

  });

  it('Should Return status 400 and message "Dados incorretos"', async function () {
    const userController = new UserController();

    sinon.stub(UserService.prototype, 'findByUsername').resolves(userMock.userLoginServiceInvalidData)

    req.body = {
      username: "wrongUser@email.com",
      password: "123456"
    };

    await userController.login(req, res)

    expect(res.status).to.have.been.calledWith(400)
    expect(res.json).to.have.been.calledWith({ message: 'Dados incorretos' })

  });

});