import { CreateUser, IUser } from '../interfaces/user/IUser';
import IUserModel from '../interfaces/user/IUserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import JWT from '../utils/JWT';
import HashService from '../interfaces/IHash';
import BCryptHashService from '../utils/Hash';
// import UserModel from '../model/sequelize/UserModel';
import UserModel from '../model/prisma/UserModel';

export default class UserService {
  private msgInvalidData = 'Dados incorretos';
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService = JWT,
    private hashService: HashService = new BCryptHashService(),
  ) { }

  async findByUsername(
    username: string,
    password: string,
  ): Promise<ServiceResponse<{ token: string }>> {
    const user = await this.userModel.findByUsername(username);

    if (!user) return { status: 'INVALID_DATA', data: { message: this.msgInvalidData } };

    const isPasswordMatch = await this.hashService.compare(password, user.password);

    if (!isPasswordMatch) return { status: 'INVALID_DATA', data: { message: this.msgInvalidData } };

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = this.jwtService.sign(payload);

    return { status: 'SUCCESSFUL', data: { token } };
  }

  async create(data: CreateUser): Promise<ServiceResponse<{name: string, username: string}>> {
    const { username } = data;
    const user = await this.userModel.findByUsername(username);

    if (user) return { status: 'CONFLICT', data: { message: 'Dados incorretos' } };

    const userCreated = await this.userModel.create({
      name: data.name,
      username: data.username,
      password: await this.hashService.hash(data.password),
    });

    return { status: 'CREATED', data: {
      name: userCreated.name, 
      username: userCreated.username
    } };
  }
}
