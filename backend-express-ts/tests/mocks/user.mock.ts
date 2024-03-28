import { ServiceResponseError, ServiceResponseSuccess } from '../../src/interfaces/ServiceResponse';
import BCryptHashService from '../../src/utils/Hash';

const hashService = new BCryptHashService()

const userSequelizeFromDB = { 
  id: 1, 
  name: "user01" , 
  username: 'email@email.com', 
  password: '$2b$10$8eLf/TBLLsZ5.aP6kBG8IuJUL7zwuYa0LzxepKtv3nkrZzwWLQItW'
  // password: '123456'
}

const userLoginServiceSuccess: ServiceResponseSuccess<{ token: string; }> = { status: 'SUCCESSFUL', data: { token: 'token' } }

const userLoginServiceInvalidData: ServiceResponseError = { status: 'INVALID_DATA', data: { message: 'Dados incorretos' } }

const userSequelizeCreate = { 
  name: "user01" , 
  username: 'email@email.com', 
  password: '$2b$10$8eLf/TBLLsZ5.aP6kBG8IuJUL7zwuYa0LzxepKtv3nkrZzwWLQItW'
  // password: '123456'
}

export default {
  userSequelizeFromDB,
  userLoginServiceSuccess,
  userLoginServiceInvalidData,
  userSequelizeCreate
}