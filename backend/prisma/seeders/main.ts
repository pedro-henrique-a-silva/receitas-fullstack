import { PrismaClient } from '@prisma/client';
import userSeed from './users.seed';
import categorySeed from './category.seed';
import recipeSeed from './recipe.seed';
import favoriteSeed from './favorites.seed';
import doneSeed from './dones.see';

const prisma = new PrismaClient();

async function main() {
  await userSeed();
  await categorySeed();
  await recipeSeed();
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
