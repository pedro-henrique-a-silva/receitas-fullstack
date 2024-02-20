import { Recipe, User } from '@prisma/client';
import { Request } from 'express';

export interface Favorite {}

export interface RecipeList {
  recipe: Recipe;
}

export interface AllUserFavorites extends Omit<User, 'id' | 'password'> {
  FavoriteRecipes: RecipeList[];
}

export interface RequestWithUserDataJWT extends Request {
  user: {
    name: string;
    username: string;
    iat: number;
    exp: number;
  };
}
