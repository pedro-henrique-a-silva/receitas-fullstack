import { IRecipeModel } from '../interfaces/recipe/IRecipeModel';
import { ICategory } from '../interfaces/category/ICategory';
import { IRecipe } from '../interfaces/recipe/IRecipe';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import RecipeModel from '../model/RecipeModel';
import IFavoriteModel from '../interfaces/favorite/IFavoriteModel';
import FavoriteModel from '../model/FavoriteModel';

export default class RecipesService {
  constructor(
    private recipeModel: IRecipeModel = new RecipeModel(),
    private favoriteModel: IFavoriteModel = new FavoriteModel(),
  ) { }

  async findAll(recipeType: string): Promise<ServiceResponse<IRecipe[]>> {
    const recipes = await this.recipeModel.findAll(recipeType);

    return { status: 'SUCCESSFUL', data: recipes };
  }

  async findById(id: number): Promise<ServiceResponse<IRecipe>> {
    const recipe = await this.recipeModel.findById(id);

    if (!recipe) return { status: 'NOT_FOUND', data: { message: 'erro' } };

    const favorite = await this.favoriteModel.getOneFavorite(recipe.id, id);

    recipe.favorite = !!(favorite);

    return { status: 'SUCCESSFUL', data: recipe };
  }

  async findAllCategories(
    recipeType: string,
  ): Promise<ServiceResponse<Pick<ICategory, 'categoryName'>[]>> {
    const categories = await this.recipeModel.findAllCategories(recipeType);

    return { status: 'SUCCESSFUL', data: categories };
  }

  async findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<ServiceResponse<IRecipe[]>> {
    const recipesByCategory = await this.recipeModel.findByCategory(recipeType, categoryName);

    return { status: 'SUCCESSFUL', data: recipesByCategory };
  }
}
