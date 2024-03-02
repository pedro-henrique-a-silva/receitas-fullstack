import { IUser, CreateUser } from '../interfaces/user/IUser';
import IUserModel from '../interfaces/user/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private userModel = SequelizeUser;

  async findByUsername(username: string): Promise<IUser | null> {
    const user = await this.userModel.findOne({ where: { username } });

    return user;
  }

  async create(data: CreateUser): Promise<IUser> {
    const userCreated = await this.userModel.create(data);

    return userCreated;
  }
}
