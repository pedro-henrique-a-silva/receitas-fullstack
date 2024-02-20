import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepository: RecipesRepository) {}

  async findAll(recipeType: string): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findAll(recipeType);

    return recipes;
  }

  async findById(id: number, recipeType: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findById(id, recipeType);

    if (!recipe) throw new NotFoundException();

    return recipe;
  }
}
