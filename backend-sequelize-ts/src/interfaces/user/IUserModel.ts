import { CreateUser, IUser } from "./IUser";

export default interface IUserModel {
  findByUsername(username: string): Promise<IUser | null>;
  create(
    data: Partial<CreateUser>,
  ): Promise<IUser>;
}