import { CreateUser, IUser } from '../interfaces/user/IUser';
import IUserModel from '../interfaces/user/IUserModel';
import UserModel from '../model/UserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

import JWT from '../utils/JWT';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService = JWT,
  ) { }

  async findByUsername(username: string): Promise<ServiceResponse<{ token: string }>> {
    const user = await this.userModel.findByUsername(username);

    if (!user) return { status: 'INVALID_DATA', data: { message: 'Dados incorretos' } };

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = this.jwtService.sign(payload);

    return { status: 'SUCCESSFUL', data: { token } };
  }

  async create(data: CreateUser): Promise<ServiceResponse<IUser>> {
    const { username } = data;
    const user = await this.userModel.findByUsername(username);

    if (user) return { status: 'CONFLICT', data: { message: 'Dados incorretos' } };

    const userCreated = await this.userModel.create(data);

    return { status: 'CREATED', data: userCreated };
  }
}
