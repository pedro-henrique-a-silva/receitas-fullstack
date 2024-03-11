import { AllUserDones } from './dones.interface';

export default abstract class DonesRepository {
  abstract getDones(id: number): Promise<AllUserDones | null>;
  abstract updateDones(recipeId: number, userId: number): Promise<Boolean>;
}
