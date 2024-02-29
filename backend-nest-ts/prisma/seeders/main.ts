import { PrismaClient } from '@prisma/client';
import userSeed from './users.seed';
import categorySeed from './category.seed';
import recipeSeed from './recipe.seed';
import favoriteSeed from './favorites.seed';
import doneSeed from './dones.seed';
import ingredientsSeed from './ingredients.seed';

const prisma = new PrismaClient();

async function main() {
  await userSeed();
  await categorySeed();
  await recipeSeed();
  await ingredientsSeed();
  await favoriteSeed();
  await doneSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
