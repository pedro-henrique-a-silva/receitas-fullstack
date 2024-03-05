import IUserModel from '../interfaces/user/IUserModel';
import IDonesModel from '../interfaces/dones/IDonesModel';
import DoneModel from '../model/sequelize/DoneModel';
// import DoneModel from '../model/prisma/DoneModel';
import UserModel from '../model/sequelize/UserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { AllUserDones } from '../interfaces/dones/IDones';
// import UserModel from '../model/prisma/UserModel';

export default class DoneService {
  constructor(
    private doneModel: IDonesModel = new DoneModel(),
    private userModel: IUserModel = new UserModel(),
  ) {}

  async getDones(id: number): Promise<ServiceResponse<AllUserDones>> {
    const dones = await this.doneModel.getDones(id);

    return { status: 'SUCCESSFUL', data: dones };
  }

  async updateDones(
    recipeId: number,
    userId: number,
    username: string,
  ) {
    const user = await this.userModel.findByUsername(username);
    if (!user || user.id !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'unauthorized' } };
    }
    const isFavorited = await this.doneModel.updateDones(recipeId, userId);

    return { status: 'SUCCESSFUL', data: { message: isFavorited } };
  }
}
