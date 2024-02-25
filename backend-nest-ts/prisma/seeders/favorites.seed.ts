import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function favoriteSeed() {
  await prisma.favoriteRecipes.createMany({
    data: [
      { userId: 1, recipeId: 52769 },
      { userId: 1, recipeId: 12450 },
      { userId: 2, recipeId: 52887 },
      { userId: 2, recipeId: 13332 },
    ],
  });
}
