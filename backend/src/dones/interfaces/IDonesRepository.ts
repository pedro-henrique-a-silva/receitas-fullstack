import { AllUserDones } from './dones.interface';

export interface IDonesRepository {
  getDones(id: number): Promise<AllUserDones | null>;
  updateDones(recipeId: number, userId: number): Promise<void>;
}
