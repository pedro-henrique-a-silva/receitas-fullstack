import * as sinon from 'sinon';
import * as chai from 'chai';
import SequelizeUser from '../../../src/database/models/SequelizeUser';
import UserMocks from '../../mocks/user.mock';
import UserModel from '../../../src/model/sequelize/UserModel';

const { expect } = chai;

describe('Testando users - MODEL', function() {
  beforeEach(function () { sinon.restore(); });

  it('Verifica busca por um usuário', async function () {
    const mockUserFromDB = SequelizeUser.build(UserMocks.userSequelizeFromDB);

    sinon.stub(SequelizeUser, 'findOne').resolves(mockUserFromDB);
    
    const userModel = new UserModel();
    const user = await userModel.findByUsername(mockUserFromDB.username);

    expect(user).to.be.not.null;
    expect(user?.id).to.be.equal(mockUserFromDB.id);
    expect(user?.name).to.be.equal(mockUserFromDB.name);
    expect(user?.username).to.be.equal(mockUserFromDB.username);
  })

  it('Verifica criação de um usuário', async function () {
    const mockUserFromDB = SequelizeUser.build(UserMocks.userSequelizeFromDB);

    sinon.stub(SequelizeUser, 'create').resolves(mockUserFromDB);

    const userModel = new UserModel();
    const user = await userModel.create(UserMocks.userSequelizeCreate);

    expect(user).to.be.not.null;
    expect(user?.id).to.be.equal(mockUserFromDB.id);
    expect(user?.name).to.be.equal(mockUserFromDB.name);
    expect(user?.username).to.be.equal(mockUserFromDB.username);
  })

})