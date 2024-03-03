import SequelizeDone from '../../database/models/SequelizeDone';
import SequelizeCategory from '../../database/models/SequelizeCategory';
import SequelizeRecipe from '../../database/models/SequelizeRecipe';
import SequelizeUser from '../../database/models/SequelizeUser';
import { AllUserDones, IDones } from '../../interfaces/dones/IDones';
import IDonesModel from '../../interfaces/dones/IDonesModel';

export default class DoneModel implements IDonesModel {
  private userModel = SequelizeUser;
  private doneModel = SequelizeDone;

  async getDones(id: number): Promise<AllUserDones | null> {
    const dones = await this.userModel.findOne({
      attributes: ['id', 'name', 'username'],
      include: [
        {
          model: SequelizeRecipe,
          through: { attributes: [] },
          as: 'recipesDone',
          include: [
            { model: SequelizeCategory, as: 'category', attributes: ['categoryName'] },
          ],
        },

      ],
      where: { id },
    });

    return dones as never as AllUserDones;
  }

  async updateDones(recipeId: number, userId: number): Promise<void> {
    const done = await this.doneModel.findOne({
      where: { userId, recipeId },
    });

    if (done) {
      await this.doneModel.destroy({
        where: { userId, recipeId },
      });

      return;
    }

    await this.doneModel.create({ userId, recipeId });
  }
}
