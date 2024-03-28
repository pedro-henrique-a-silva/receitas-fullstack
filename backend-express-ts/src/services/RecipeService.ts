import { IRecipeModel } from '../interfaces/recipe/IRecipeModel';
import { ICategory } from '../interfaces/category/ICategory';
import { IRecipe, IRecipeWithFavorite } from '../interfaces/recipe/IRecipe';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import IFavoriteModel from '../interfaces/favorite/IFavoriteModel';
import RecipeModel from '../model/sequelize/RecipeModel';
// import RecipeModel from '../model/prisma/RecipeModel';
import FavoriteModel from '../model/sequelize/FavoriteModel';
// import FavoriteModel from '../model/prisma/FavoriteModel';

export default class RecipesService {
  constructor(
    private recipeModel: IRecipeModel = new RecipeModel(),
    private favoriteModel: IFavoriteModel = new FavoriteModel(),
  ) { }

  async findAll(recipeType: string): Promise<ServiceResponse<IRecipe[]>> {
    const recipes = await this.recipeModel.findAll(recipeType);
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async findById(recipeId: number, userId: number): Promise<ServiceResponse<IRecipeWithFavorite>> {
    const recipe = await this.recipeModel.findById(recipeId);

    if (!recipe) return { status: 'NOT_FOUND', data: { message: 'erro' } };
    const favorite = await this.favoriteModel.getOneFavorite(recipe.id, userId);
    return { status: 'SUCCESSFUL', data: { ...recipe, favorite: Boolean(favorite) } };
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
