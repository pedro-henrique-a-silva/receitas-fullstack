import { AllUserDones } from './IDones';

export default interface IDonesModel {
  getDones(id: number): Promise<AllUserDones>;
  updateDones(recipeId: number, userId: number): Promise<boolean>;
}
