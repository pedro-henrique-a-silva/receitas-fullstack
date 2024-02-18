import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function categorySeed() {
  await prisma.categorie.createMany({
    data: [
      { id: 1, categoryName: 'Beef', categoryType: 'meal' },
      { id: 2, categoryName: 'Breakfast', categoryType: 'meal' },
      { id: 3, categoryName: 'Chicken', categoryType: 'meal' },
      { id: 4, categoryName: 'Dessert', categoryType: 'meal' },
      { id: 5, categoryName: 'Goat', categoryType: 'meal' },
      { id: 6, categoryName: 'Lamb', categoryType: 'meal' },
      { id: 7, categoryName: 'Miscellaneous', categoryType: 'meal' },
      { id: 8, categoryName: 'Pasta', categoryType: 'meal' },
      { id: 9, categoryName: 'Pork', categoryType: 'meal' },
      { id: 10, categoryName: 'Seafood', categoryType: 'meal' },
      { id: 11, categoryName: 'Side', categoryType: 'meal' },
      { id: 12, categoryName: 'Starter', categoryType: 'meal' },
      { id: 13, categoryName: 'Vegan', categoryType: 'meal' },
      { id: 14, categoryName: 'Vegetarian', categoryType: 'meal' },
      { id: 15, categoryName: 'Ordinary drink', categoryType: 'drink' },
      { id: 16, categoryName: 'Cocktail', categoryType: 'drink' },
      { id: 17, categoryName: 'Shake', categoryType: 'drink' },
      { id: 18, categoryName: 'Other / Unknown', categoryType: 'drink' },
      { id: 19, categoryName: 'Cocoa', categoryType: 'drink' },
      { id: 20, categoryName: 'Shot', categoryType: 'drink' },
      { id: 21, categoryName: 'Coffee / Tea', categoryType: 'drink' },
      { id: 22, categoryName: 'Homemade Liqueur', categoryType: 'drink' },
      { id: 23, categoryName: 'Punch / Party drink', categoryType: 'drink' },
      { id: 24, categoryName: 'Beer', categoryType: 'drink' },
      { id: 26, categoryName: 'Soft drink', categoryType: 'drink' },
    ],
  });
}
