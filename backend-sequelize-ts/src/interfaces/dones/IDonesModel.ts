import { AllUserDones, IDones } from './IDones';

export default interface IDonesModel {
  getDones(id: number): Promise<AllUserDones | null>;
  updateDones(recipeId: number, userId: number): Promise<IDones | null>;
}
