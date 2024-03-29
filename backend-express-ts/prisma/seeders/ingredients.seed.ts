import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function ingredientsSeed() {
  await prisma.ingredient.createMany({
    data: [
      { recipeId: 52769, ingredient: 'Fries', order: 1, measure: '250 Grams' },
      {
        recipeId: 52769,
        ingredient: 'Doner Meat',
        order: 2,
        measure: '500 Grams',
      },
      {
        recipeId: 52769,
        ingredient: 'Garlic sauce',
        order: 3,
        measure: 'Topping',
      },
      { recipeId: 52769, ingredient: 'Hotsauce', order: 4, measure: 'Topping' },
      { recipeId: 52769, ingredient: 'Lettuce', order: 5, measure: '1 Bulb' },
      { recipeId: 52769, ingredient: 'Tomato', order: 6, measure: '1' },
      { recipeId: 52769, ingredient: 'Cucumber', order: 7, measure: '3rd' },
      {
        recipeId: 52769,
        ingredient: 'Gouda cheese',
        order: 8,
        measure: '100 Grams',
      },
      { recipeId: 52785, ingredient: 'Toor dal', order: 1, measure: '1 cup' },
      { recipeId: 52785, ingredient: 'Water', order: 2, measure: '2-1/2 cups' },
      { recipeId: 52785, ingredient: 'Salt', order: 3, measure: '1 tsp' },
      { recipeId: 52785, ingredient: 'Turmeric', order: 4, measure: '1/4 tsp' },
      { recipeId: 52785, ingredient: 'Ghee', order: 5, measure: '3 tbs' },
      {
        recipeId: 52785,
        ingredient: 'Chopped tomatoes',
        order: 6,
        measure: '1 cup',
      },
      {
        recipeId: 52785,
        ingredient: 'Cumin seeds',
        order: 7,
        measure: '1/2 tsp',
      },
      {
        recipeId: 52785,
        ingredient: 'Mustard Seeds',
        order: 8,
        measure: '1/2 tsp',
      },
      { recipeId: 52785, ingredient: 'Bay Leaf', order: 9, measure: '2' },
      {
        recipeId: 52785,
        ingredient: 'Green Chili',
        order: 10,
        measure: '1 tbs chopped',
      },
      {
        recipeId: 52785,
        ingredient: 'Ginger',
        order: 11,
        measure: '2 tsp shredded',
      },
      { recipeId: 52785, ingredient: 'Cilantro', order: 12, measure: '2 tbs ' },
      {
        recipeId: 52785,
        ingredient: 'Red Pepper',
        order: 13,
        measure: '1/2 tsp',
      },
      { recipeId: 52785, ingredient: 'Salt', order: 14, measure: '1/2 tsp' },
      { recipeId: 52785, ingredient: 'Sugar', order: 15, measure: '1 tsp' },
      {
        recipeId: 52785,
        ingredient: 'Garam Masala',
        order: 16,
        measure: '1/4 tsp',
      },
      {
        recipeId: 52802,
        ingredient: 'Floury Potatoes',
        order: 1,
        measure: '900g',
      },
      { recipeId: 52802, ingredient: 'Olive Oil', order: 2, measure: '2 tbsp' },
      {
        recipeId: 52802,
        ingredient: 'Semi-skimmed Milk',
        order: 3,
        measure: '600ml',
      },
      {
        recipeId: 52802,
        ingredient: 'White Fish Fillets',
        order: 4,
        measure: '800g',
      },
      {
        recipeId: 52802,
        ingredient: 'Plain flour',
        order: 5,
        measure: '1 tbsp',
      },
      { recipeId: 52802, ingredient: 'Nutmeg', order: 6, measure: 'Grating' },
      {
        recipeId: 52802,
        ingredient: 'Double Cream',
        order: 7,
        measure: '3 tbsp',
      },
      {
        recipeId: 52802,
        ingredient: 'Jerusalem Artichokes',
        order: 8,
        measure: '200g',
      },
      {
        recipeId: 52802,
        ingredient: 'Leek',
        order: 9,
        measure: '1 finely sliced',
      },
      {
        recipeId: 52802,
        ingredient: 'Prawns',
        order: 10,
        measure: '200g peeled raw',
      },
      {
        recipeId: 52802,
        ingredient: 'Parsley',
        order: 11,
        measure: 'Large handful',
      },
      { recipeId: 52802, ingredient: 'Dill', order: 12, measure: 'Handful' },
      {
        recipeId: 52802,
        ingredient: 'Lemon',
        order: 13,
        measure: 'Grated zest of 1',
      },
      {
        recipeId: 52802,
        ingredient: 'Gruyère',
        order: 14,
        measure: '25g grated',
      },
      {
        recipeId: 52802,
        ingredient: 'Lemon',
        order: 15,
        measure: 'Juice of 1',
      },
      {
        recipeId: 52804,
        ingredient: 'Vegetable Oil',
        order: 1,
        measure: 'Dash',
      },
      { recipeId: 52804, ingredient: 'Beef Gravy', order: 2, measure: '1 Can' },
      {
        recipeId: 52804,
        ingredient: 'Potatoes',
        order: 3,
        measure: '5 thin cut',
      },
      {
        recipeId: 52804,
        ingredient: 'Cheese Curds',
        order: 4,
        measure: '2 cups',
      },
      {
        recipeId: 52811,
        ingredient: 'Olive Oil',
        order: 1,
        measure: '5 tablespoons',
      },
      { recipeId: 52811, ingredient: 'Onion', order: 2, measure: '1 chopped' },
      { recipeId: 52811, ingredient: 'Carrot', order: 3, measure: '1 chopped' },
      {
        recipeId: 52811,
        ingredient: 'Celery',
        order: 4,
        measure: '1 stalk chopped',
      },
      {
        recipeId: 52811,
        ingredient: 'Garlic',
        order: 5,
        measure: '1 tablespoon minced',
      },
      {
        recipeId: 52811,
        ingredient: 'Cannellini Beans',
        order: 6,
        measure: '2 cups',
      },
      {
        recipeId: 52811,
        ingredient: 'Canned tomatoes',
        order: 7,
        measure: '1',
      },
      { recipeId: 52811, ingredient: 'Water', order: 8, measure: '4 cups' },
      {
        recipeId: 52811,
        ingredient: 'Rosemary',
        order: 9,
        measure: '1 fresh sprig',
      },
      {
        recipeId: 52811,
        ingredient: 'Thyme',
        order: 10,
        measure: '1 fresh sprig',
      },
      {
        recipeId: 52811,
        ingredient: 'Kale',
        order: 11,
        measure: '1 pound chopped',
      },
      {
        recipeId: 52811,
        ingredient: 'Wholegrain Bread',
        order: 12,
        measure: '4 thick slices',
      },
      {
        recipeId: 52811,
        ingredient: 'Red Onion',
        order: 13,
        measure: '1 thinly sliced',
      },
      {
        recipeId: 52811,
        ingredient: 'Parmesan',
        order: 14,
        measure: '½ cup freshly grated',
      },
      {
        recipeId: 52844,
        ingredient: 'Olive Oil',
        order: 1,
        measure: '1 tblsp ',
      },
      { recipeId: 52844, ingredient: 'Bacon', order: 2, measure: '2' },
      {
        recipeId: 52844,
        ingredient: 'Onion',
        order: 3,
        measure: '1 finely chopped ',
      },
      { recipeId: 52844, ingredient: 'Celery', order: 4, measure: '1 Stick' },
      { recipeId: 52844, ingredient: 'Carrots', order: 5, measure: '1 medium' },
      {
        recipeId: 52844,
        ingredient: 'Garlic',
        order: 6,
        measure: '2 cloves chopped',
      },
      { recipeId: 52844, ingredient: 'Minced Beef', order: 7, measure: '500g' },
      {
        recipeId: 52844,
        ingredient: 'Tomato Puree',
        order: 8,
        measure: '1 tbls',
      },
      {
        recipeId: 52844,
        ingredient: 'Chopped Tomatoes',
        order: 9,
        measure: '800g',
      },
      { recipeId: 52844, ingredient: 'Honey', order: 10, measure: '1 tblsp ' },
      {
        recipeId: 52844,
        ingredient: 'Lasagne Sheets',
        order: 11,
        measure: '500g',
      },
      {
        recipeId: 52844,
        ingredient: 'Creme Fraiche',
        order: 12,
        measure: '400ml',
      },
      {
        recipeId: 52844,
        ingredient: 'Mozzarella Balls',
        order: 13,
        measure: '125g',
      },
      {
        recipeId: 52844,
        ingredient: 'Parmesan Cheese',
        order: 14,
        measure: '50g',
      },
      {
        recipeId: 52844,
        ingredient: 'Basil Leaves',
        order: 15,
        measure: 'Topping',
      },
      { recipeId: 52854, ingredient: 'Flour', order: 1, measure: '100g ' },
      { recipeId: 52854, ingredient: 'Eggs', order: 2, measure: '2 large' },
      { recipeId: 52854, ingredient: 'Milk', order: 3, measure: '300ml ' },
      {
        recipeId: 52854,
        ingredient: 'Sunflower Oil',
        order: 4,
        measure: '1 tbls',
      },
      { recipeId: 52854, ingredient: 'Sugar', order: 5, measure: 'to serve' },
      {
        recipeId: 52854,
        ingredient: 'Raspberries',
        order: 6,
        measure: 'to serve',
      },
      {
        recipeId: 52854,
        ingredient: 'Blueberries',
        order: 7,
        measure: 'to serve',
      },
      {
        recipeId: 52887,
        ingredient: 'Smoked Haddock',
        order: 1,
        measure: '300g',
      },
      { recipeId: 52887, ingredient: 'Bay Leaves', order: 2, measure: '2' },
      { recipeId: 52887, ingredient: 'Milk', order: 3, measure: '300ml ' },
      { recipeId: 52887, ingredient: 'Eggs', order: 4, measure: '4' },
      { recipeId: 52887, ingredient: 'Parsley', order: 5, measure: 'Handful' },
      {
        recipeId: 52887,
        ingredient: 'Coriander',
        order: 6,
        measure: 'Handful',
      },
      {
        recipeId: 52887,
        ingredient: 'Vegetable Oil',
        order: 7,
        measure: '2 tbs',
      },
      { recipeId: 52887, ingredient: 'Onion', order: 8, measure: '1 chopped' },
      { recipeId: 52887, ingredient: 'Coriander', order: 9, measure: '1 tsp ' },
      {
        recipeId: 52887,
        ingredient: 'Curry Powder',
        order: 10,
        measure: '2 tsp',
      },
      { recipeId: 52887, ingredient: 'Rice', order: 11, measure: '300g' },
      { recipeId: 52906, ingredient: 'Butter', order: 1, measure: '75g' },
      { recipeId: 52906, ingredient: 'Leek', order: 2, measure: '1kg' },
      { recipeId: 52906, ingredient: 'Salt', order: 3, measure: '½ tsp' },
      {
        recipeId: 52906,
        ingredient: 'Creme Fraiche',
        order: 4,
        measure: '300ml ',
      },
      { recipeId: 52906, ingredient: 'Egg', order: 5, measure: '1' },
      { recipeId: 52906, ingredient: 'Egg Yolks', order: 6, measure: '3' },
      {
        recipeId: 52906,
        ingredient: 'Nutmeg',
        order: 7,
        measure: '¼ teaspoon',
      },
      { recipeId: 52906, ingredient: 'Plain Flour', order: 8, measure: '225g' },
      { recipeId: 52906, ingredient: 'Salt', order: 9, measure: '½ tsp' },
      { recipeId: 52906, ingredient: 'Butter', order: 10, measure: '60g' },
      { recipeId: 52906, ingredient: 'Lard', order: 11, measure: '60g' },
      {
        recipeId: 52906,
        ingredient: 'Cheddar Cheese',
        order: 12,
        measure: '50g',
      },
      { recipeId: 52906, ingredient: 'Water', order: 13, measure: '2 tbs' },
      { recipeId: 52929, ingredient: 'Flour', order: 1, measure: '2 cups ' },
      { recipeId: 52929, ingredient: 'Sugar', order: 2, measure: '1/3 cup' },
      {
        recipeId: 52929,
        ingredient: 'Baking Powder',
        order: 3,
        measure: '3 tsp',
      },
      { recipeId: 52929, ingredient: 'Salt', order: 4, measure: '½ tsp' },
      { recipeId: 52929, ingredient: 'Egg', order: 5, measure: '1 beaten' },
      { recipeId: 52929, ingredient: 'Milk', order: 6, measure: '¾ cup' },
      { recipeId: 52929, ingredient: 'Oil', order: 7, measure: '3 tbs' },
      { recipeId: 52929, ingredient: 'Oil', order: 8, measure: 'for frying' },
      {
        recipeId: 52929,
        ingredient: 'Icing Sugar',
        order: 9,
        measure: 'garnish',
      },
      {
        recipeId: 52931,
        ingredient: 'Brown Sugar',
        order: 1,
        measure: '2 cups ',
      },
      { recipeId: 52931, ingredient: 'Butter', order: 2, measure: '¼ cup' },
      { recipeId: 52931, ingredient: 'Eggs', order: 3, measure: '2' },
      {
        recipeId: 52931,
        ingredient: 'Vanilla Extract',
        order: 4,
        measure: '1 tsp ',
      },
      { recipeId: 52931, ingredient: 'Salt', order: 5, measure: '1 tsp ' },
      {
        recipeId: 52931,
        ingredient: 'Plain Flour',
        order: 6,
        measure: '½ cup ',
      },
      { recipeId: 52931, ingredient: 'Milk', order: 7, measure: '1 1/2 cups ' },
      { recipeId: 52948, ingredient: 'Pork', order: 1, measure: '1lb' },
      {
        recipeId: 52948,
        ingredient: 'Garlic Clove',
        order: 2,
        measure: '3 chopped',
      },
      { recipeId: 52948, ingredient: 'Ginger', order: 3, measure: '1 tsp ' },
      { recipeId: 52948, ingredient: 'Soy Sauce', order: 4, measure: '1 tbs' },
      {
        recipeId: 52948,
        ingredient: 'Sesame Seed Oil',
        order: 5,
        measure: '1 tsp ',
      },
      {
        recipeId: 52948,
        ingredient: 'Carrots',
        order: 6,
        measure: '3 finely chopped',
      },
      {
        recipeId: 52948,
        ingredient: 'Celery',
        order: 7,
        measure: '3 finely chopped',
      },
      {
        recipeId: 52948,
        ingredient: 'Spring Onions',
        order: 8,
        measure: '6 chopped',
      },
      {
        recipeId: 52948,
        ingredient: 'Wonton Skin',
        order: 9,
        measure: '1 Packet',
      },
      { recipeId: 52948, ingredient: 'Oil', order: 10, measure: 'Fry' },
      { recipeId: 52948, ingredient: 'Water', order: 11, measure: 'Bottle' },
      { recipeId: 52963, ingredient: 'Olive Oil', order: 1, measure: '1 tbs' },
      {
        recipeId: 52963,
        ingredient: 'Red Onions',
        order: 2,
        measure: '2 chopped',
      },
      {
        recipeId: 52963,
        ingredient: 'Red Chilli',
        order: 3,
        measure: '1 finely chopped ',
      },
      { recipeId: 52963, ingredient: 'Garlic', order: 4, measure: '1 clove' },
      {
        recipeId: 52963,
        ingredient: 'Coriander',
        order: 5,
        measure: 'Chopped',
      },
      {
        recipeId: 52963,
        ingredient: 'Cherry Tomatoes',
        order: 6,
        measure: '800g',
      },
      {
        recipeId: 52963,
        ingredient: 'Caster Sugar',
        order: 7,
        measure: '1 tbs',
      },
      { recipeId: 52963, ingredient: 'Eggs', order: 8, measure: '4' },
      { recipeId: 52963, ingredient: 'Feta', order: 9, measure: 'Spinkling' },
      { recipeId: 52971, ingredient: 'Potatoes', order: 1, measure: '5 Large' },
      { recipeId: 52971, ingredient: 'Olive Oil', order: 2, measure: '2 tbs' },
      { recipeId: 52971, ingredient: 'Green Pepper', order: 3, measure: '1' },
      { recipeId: 52971, ingredient: 'Onions', order: 4, measure: '5' },
      {
        recipeId: 52971,
        ingredient: 'Ras el hanout',
        order: 5,
        measure: '1 tbs',
      },
      { recipeId: 52971, ingredient: 'Pumpkin', order: 6, measure: '500g' },
      { recipeId: 52971, ingredient: 'Eggs', order: 7, measure: '24 Skinned' },
      { recipeId: 52971, ingredient: 'Salt', order: 8, measure: 'Pinch' },
      { recipeId: 52971, ingredient: 'Pepper', order: 9, measure: 'Pinch' },
      { recipeId: 52977, ingredient: 'Lentils', order: 1, measure: '1 cup ' },
      { recipeId: 52977, ingredient: 'Onion', order: 2, measure: '1 large' },
      { recipeId: 52977, ingredient: 'Carrots', order: 3, measure: '1 large' },
      {
        recipeId: 52977,
        ingredient: 'Tomato Puree',
        order: 4,
        measure: '1 tbs',
      },
      { recipeId: 52977, ingredient: 'Cumin', order: 5, measure: '2 tsp' },
      { recipeId: 52977, ingredient: 'Paprika', order: 6, measure: '1 tsp ' },
      { recipeId: 52977, ingredient: 'Mint', order: 7, measure: '1/2 tsp' },
      { recipeId: 52977, ingredient: 'Thyme', order: 8, measure: '1/2 tsp' },
      {
        recipeId: 52977,
        ingredient: 'Black Pepper',
        order: 9,
        measure: '1/4 tsp',
      },
      {
        recipeId: 52977,
        ingredient: 'Red Pepper Flakes',
        order: 10,
        measure: '1/4 tsp',
      },
      {
        recipeId: 52977,
        ingredient: 'Vegetable Stock',
        order: 11,
        measure: '4 cups ',
      },
      { recipeId: 52977, ingredient: 'Water', order: 12, measure: '1 cup ' },
      { recipeId: 52977, ingredient: 'Sea Salt', order: 13, measure: 'Pinch' },
      { recipeId: 52978, ingredient: 'Potatoes', order: 1, measure: '2 large' },
      { recipeId: 52978, ingredient: 'Butter', order: 2, measure: '2 tbs' },
      { recipeId: 52978, ingredient: 'Cheese', order: 3, measure: '150g' },
      { recipeId: 52978, ingredient: 'Onion', order: 4, measure: '1 large' },
      {
        recipeId: 52978,
        ingredient: 'Red Pepper',
        order: 5,
        measure: '1 large',
      },
      {
        recipeId: 52978,
        ingredient: 'Red Chile Flakes',
        order: 6,
        measure: 'Pinch',
      },
      { recipeId: 52980, ingredient: 'Potatoes', order: 1, measure: '1.5kg' },
      {
        recipeId: 52980,
        ingredient: 'Bay Leaf',
        order: 2,
        measure: '2 leaves',
      },
      { recipeId: 52980, ingredient: 'Shallots', order: 3, measure: '2' },
      { recipeId: 52980, ingredient: 'Butter', order: 4, measure: '3 tbs' },
      { recipeId: 52980, ingredient: 'Kale', order: 5, measure: '750g' },
      { recipeId: 52980, ingredient: 'Sausages', order: 6, measure: '2' },
      { recipeId: 52980, ingredient: 'Milk', order: 7, measure: '500ml' },
      { recipeId: 52980, ingredient: 'Nutmeg', order: 8, measure: 'Grated' },
      { recipeId: 52980, ingredient: 'Salt', order: 9, measure: 'Pinch' },
      { recipeId: 52980, ingredient: 'Pepper', order: 10, measure: 'Pinch' },
      { recipeId: 53006, ingredient: 'Beef', order: 1, measure: '500g' },
      {
        recipeId: 53006,
        ingredient: 'Aubergine',
        order: 2,
        measure: '1 large',
      },
      {
        recipeId: 53006,
        ingredient: 'Greek Yogurt',
        order: 3,
        measure: '150g',
      },
      { recipeId: 53006, ingredient: 'Egg', order: 4, measure: '1 beaten' },
      { recipeId: 53006, ingredient: 'Parmesan', order: 5, measure: '3 tbs' },
      { recipeId: 53006, ingredient: 'Tomato', order: 6, measure: '400g' },
      {
        recipeId: 53006,
        ingredient: 'Tomato Puree',
        order: 7,
        measure: '4 tbs',
      },
      { recipeId: 53006, ingredient: 'Potatoes', order: 8, measure: '350g' },
      { recipeId: 53013, ingredient: 'Minced Beef', order: 1, measure: '400g' },
      { recipeId: 53013, ingredient: 'Olive Oil', order: 2, measure: '2 tbs' },
      {
        recipeId: 53013,
        ingredient: 'Sesame Seed Burger Buns',
        order: 3,
        measure: '2',
      },
      { recipeId: 53013, ingredient: 'Onion', order: 4, measure: 'Chopped' },
      {
        recipeId: 53013,
        ingredient: 'Iceberg Lettuce',
        order: 5,
        measure: '1/4 ',
      },
      { recipeId: 53013, ingredient: 'Cheese', order: 6, measure: '2 sliced' },
      {
        recipeId: 53013,
        ingredient: 'Dill Pickles',
        order: 7,
        measure: '2 large',
      },
      {
        recipeId: 53013,
        ingredient: 'Mayonnaise',
        order: 8,
        measure: '1 cup ',
      },
      {
        recipeId: 53013,
        ingredient: 'White Wine Vinegar',
        order: 9,
        measure: '2 tsp',
      },
      { recipeId: 53013, ingredient: 'Pepper', order: 10, measure: 'Pinch' },
      { recipeId: 53013, ingredient: 'Mustard', order: 11, measure: '2 tsp' },
      {
        recipeId: 53013,
        ingredient: 'Onion Salt',
        order: 12,
        measure: '1 1/2 tsp ',
      },
      {
        recipeId: 53013,
        ingredient: 'Garlic Powder',
        order: 13,
        measure: '1 1/2 tsp ',
      },
      { recipeId: 53013, ingredient: 'Paprika', order: 14, measure: '1/2 tsp' },
      {
        recipeId: 53026,
        ingredient: 'Broad Beans',
        order: 1,
        measure: '3 cups ',
      },
      { recipeId: 53026, ingredient: 'Spring Onions', order: 2, measure: '6' },
      { recipeId: 53026, ingredient: 'Garlic Clove', order: 3, measure: '4' },
      { recipeId: 53026, ingredient: 'Parsley', order: 4, measure: '1/4 cup' },
      { recipeId: 53026, ingredient: 'Cumin', order: 5, measure: '2 tsp' },
      {
        recipeId: 53026,
        ingredient: 'Baking Powder',
        order: 6,
        measure: '1 tsp ',
      },
      {
        recipeId: 53026,
        ingredient: 'Cayenne Pepper',
        order: 7,
        measure: '1/2 tsp',
      },
      { recipeId: 53026, ingredient: 'Flour', order: 8, measure: 'Spinkling' },
      {
        recipeId: 53026,
        ingredient: 'Vegetable Oil',
        order: 9,
        measure: 'As required',
      },
      {
        recipeId: 53027,
        ingredient: 'Brown Lentils',
        order: 1,
        measure: '1 1/2 cups ',
      },
      { recipeId: 53027, ingredient: 'Rice', order: 2, measure: '1 1/2 cups ' },
      {
        recipeId: 53027,
        ingredient: 'Coriander',
        order: 3,
        measure: '1/2 tsp',
      },
      { recipeId: 53027, ingredient: 'Macaroni', order: 4, measure: '2 cups ' },
      { recipeId: 53027, ingredient: 'Chickpeas', order: 5, measure: 'Can' },
      { recipeId: 53027, ingredient: 'Onion', order: 6, measure: '1 large' },
      { recipeId: 53027, ingredient: 'Salt', order: 7, measure: 'Sprinking' },
      {
        recipeId: 53027,
        ingredient: 'Vegetable Oil',
        order: 8,
        measure: '1/2 cup ',
      },
      {
        recipeId: 53028,
        ingredient: 'Chicken Thighs',
        order: 1,
        measure: '1 kg',
      },
      { recipeId: 53028, ingredient: 'Coriander', order: 2, measure: '1 tbs' },
      { recipeId: 53028, ingredient: 'Cumin', order: 3, measure: '1 tbs' },
      { recipeId: 53028, ingredient: 'Cardamom', order: 4, measure: '1 tbs' },
      {
        recipeId: 53028,
        ingredient: 'Cayenne Pepper',
        order: 5,
        measure: '1 tsp ',
      },
      { recipeId: 53028, ingredient: 'Paprika', order: 6, measure: '2 tsp' },
      {
        recipeId: 53028,
        ingredient: 'Lemon Juice',
        order: 7,
        measure: '2 tbs',
      },
      { recipeId: 53028, ingredient: 'Olive Oil', order: 8, measure: '3 tbs' },
      {
        recipeId: 53028,
        ingredient: 'Greek Yogurt',
        order: 9,
        measure: '1 cup ',
      },
      { recipeId: 53028, ingredient: 'Garlic Clove', order: 10, measure: '1' },
      { recipeId: 53028, ingredient: 'Cumin', order: 11, measure: '1 tsp ' },
      {
        recipeId: 53028,
        ingredient: 'Lemon Juice',
        order: 12,
        measure: 'Splash',
      },
      { recipeId: 53028, ingredient: 'Lettuce', order: 13, measure: 'Sliced' },
      { recipeId: 53028, ingredient: 'Tomato', order: 14, measure: 'Sliced' },
      { recipeId: 53028, ingredient: 'Pita Bread', order: 15, measure: '6' },
      {
        recipeId: 53060,
        ingredient: 'Filo Pastry',
        order: 1,
        measure: '1 Packet',
      },
      { recipeId: 53060, ingredient: 'Minced Beef', order: 2, measure: '150g' },
      { recipeId: 53060, ingredient: 'Onion', order: 3, measure: '150g' },
      { recipeId: 53060, ingredient: 'Oil', order: 4, measure: '40g' },
      { recipeId: 53060, ingredient: 'Salt', order: 5, measure: 'Dash' },
      { recipeId: 53060, ingredient: 'Pepper', order: 6, measure: 'Dash' },
      {
        recipeId: 53065,
        ingredient: 'Sushi Rice',
        order: 1,
        measure: '300ml ',
      },
      { recipeId: 53065, ingredient: 'Rice wine', order: 2, measure: '100ml' },
      {
        recipeId: 53065,
        ingredient: 'Caster Sugar',
        order: 3,
        measure: '2 tbs',
      },
      { recipeId: 53065, ingredient: 'Mayonnaise', order: 4, measure: '3 tbs' },
      { recipeId: 53065, ingredient: 'Rice wine', order: 5, measure: '1 tbs' },
      { recipeId: 53065, ingredient: 'Soy Sauce', order: 6, measure: '1 tbs' },
      { recipeId: 53065, ingredient: 'Cucumber', order: 7, measure: '1' },
      { recipeId: 53069, ingredient: 'Beef', order: 1, measure: '1 lb' },
      {
        recipeId: 53069,
        ingredient: 'Soy Sauce',
        order: 2,
        measure: '5 tablespoons',
      },
      { recipeId: 53069, ingredient: 'Lemon', order: 3, measure: '1' },
      { recipeId: 53069, ingredient: 'Garlic', order: 4, measure: '3 cloves' },
      { recipeId: 53069, ingredient: 'Onion', order: 5, measure: '3 parts ' },
      { recipeId: 53069, ingredient: 'Olive Oil', order: 6, measure: '4 tbs' },
      { recipeId: 53069, ingredient: 'Water', order: 7, measure: '1 cup ' },
      { recipeId: 53069, ingredient: 'Salt', order: 8, measure: '1 pinch' },
      { recipeId: 12450, ingredient: 'Gin', order: 1, measure: '1 1/2 oz ' },
      {
        recipeId: 12450,
        ingredient: 'Sweet Vermouth',
        order: 2,
        measure: '1/2 oz ',
      },
      { recipeId: 12450, ingredient: 'Brandy', order: 3, measure: '1/2 oz ' },
      { recipeId: 12764, ingredient: 'Coffee', order: 1, measure: '1 part ' },
      {
        recipeId: 12764,
        ingredient: 'Grain alcohol',
        order: 2,
        measure: '2 parts ',
      },
      {
        recipeId: 12776,
        ingredient: 'Espresso',
        order: 1,
        measure: 'Unsweetened ',
      },
      { recipeId: 12776, ingredient: 'Honey', order: 2 },
      {
        recipeId: 12776,
        ingredient: 'Cocoa powder',
        order: 3,
      },
      { recipeId: 13128, ingredient: 'Lager', order: 1, measure: '1/2 pint ' },
      { recipeId: 13128, ingredient: 'Cider', order: 2, measure: '1/2 pint ' },
      {
        recipeId: 13128,
        ingredient: 'Blackcurrant cordial',
        order: 3,
        measure: '1 dash ',
      },
      { recipeId: 13332, ingredient: 'Kahlua', order: 1, measure: '1/3 shot ' },
      {
        recipeId: 13332,
        ingredient: 'Sambuca',
        order: 2,
        measure: '1/3 shot ',
      },
      {
        recipeId: 13332,
        ingredient: 'Grand Marnier',
        order: 3,
        measure: '1/3 shot ',
      },
      { recipeId: 13501, ingredient: 'Amaretto', order: 1, measure: '1/3 ' },
      {
        recipeId: 13501,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '1/3 ',
      },
      { recipeId: 13501, ingredient: 'Cognac', order: 3, measure: '1/3 ' },
      {
        recipeId: 13938,
        ingredient: 'Absolut Vodka',
        order: 1,
        measure: '1 oz ',
      },
      { recipeId: 13938, ingredient: 'Gin', order: 2, measure: '1 oz ' },
      {
        recipeId: 13938,
        ingredient: 'Tonic water',
        order: 3,
        measure: '4 oz ',
      },
      { recipeId: 14229, ingredient: 'Kahlua', order: 1, measure: '1/3 part ' },
      {
        recipeId: 14229,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '1/3 part ',
      },
      {
        recipeId: 14229,
        ingredient: 'Frangelico',
        order: 3,
        measure: '1/3 part ',
      },
      {
        recipeId: 14598,
        ingredient: 'Vanilla vodka',
        order: 1,
        measure: '2 1/2 oz ',
      },
      {
        recipeId: 14598,
        ingredient: 'Grand Marnier',
        order: 2,
        measure: '1 splash ',
      },
      {
        recipeId: 14598,
        ingredient: 'Orange juice',
        order: 3,
        measure: 'Fill with ',
      },
      {
        recipeId: 14610,
        ingredient: '151 proof rum',
        order: 1,
        measure: '1 oz Bacardi ',
      },
      {
        recipeId: 14610,
        ingredient: 'Wild Turkey',
        order: 2,
        measure: '1 oz ',
      },
      {
        recipeId: 15288,
        ingredient: '151 proof rum',
        order: 1,
        measure: '1/2 shot Bacardi ',
      },
      {
        recipeId: 15288,
        ingredient: 'Wild Turkey',
        order: 2,
        measure: '1/2 shot ',
      },
      { recipeId: 15328, ingredient: 'Sambuca', order: 1, measure: '2 cl ' },
      {
        recipeId: 15328,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '2 cl ',
      },
      {
        recipeId: 15328,
        ingredient: 'White Creme de Menthe',
        order: 3,
        measure: '2 cl ',
      },
      {
        recipeId: 15997,
        ingredient: 'Galliano',
        order: 1,
        measure: '2 1/2 shots ',
      },
      { recipeId: 15997, ingredient: 'Ginger ale', order: 2 },
      { recipeId: 15997, ingredient: 'Ice', order: 3 },
      { recipeId: 16262, ingredient: 'Whisky', order: 1, measure: '4 cl ' },
      {
        recipeId: 16262,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '8 cl ',
      },
      { recipeId: 16262, ingredient: 'Coffee', order: 3 },
      {
        recipeId: 17141,
        ingredient: 'Red wine',
        order: 1,
        measure: '1/3 part ',
      },
      {
        recipeId: 17141,
        ingredient: 'Peach schnapps',
        order: 2,
        measure: '1 shot ',
      },
      {
        recipeId: 17141,
        ingredient: 'Pepsi Cola',
        order: 3,
        measure: '1/3 part ',
      },
      {
        recipeId: 17141,
        ingredient: 'Orange juice',
        order: 4,
        measure: '1/3 part ',
      },
      { recipeId: 17187, ingredient: 'gin', order: 1, measure: '6 cl' },
      {
        recipeId: 17187,
        ingredient: 'Peach Bitters',
        order: 2,
        measure: '2 dashes',
      },
      {
        recipeId: 17187,
        ingredient: 'Mint',
        order: 3,
        measure: '2 Fresh leaves',
      },
      {
        recipeId: 17203,
        ingredient: 'Creme de Cassis',
        order: 1,
        measure: '1 part ',
      },
      {
        recipeId: 17203,
        ingredient: 'Champagne',
        order: 2,
        measure: '5 parts ',
      },
      {
        recipeId: 17208,
        ingredient: 'Dry Vermouth',
        order: 1,
        measure: '1/2 oz ',
      },
      { recipeId: 17208, ingredient: 'Gin', order: 2, measure: '1 oz ' },
      {
        recipeId: 17208,
        ingredient: 'Apricot brandy',
        order: 3,
        measure: '1/2 oz ',
      },
      {
        recipeId: 17208,
        ingredient: 'Lemon juice',
        order: 4,
        measure: '1/2 tsp ',
      },
      { recipeId: 17208, ingredient: 'Grenadine', order: 5, measure: '1 tsp ' },
      { recipeId: 17208, ingredient: 'Powdered sugar', order: 6 },
      { recipeId: 17222, ingredient: 'Gin', order: 1, measure: '1 3/4 shot ' },
      {
        recipeId: 17222,
        ingredient: 'Grand Marnier',
        order: 2,
        measure: '1 Shot ',
      },
      {
        recipeId: 17222,
        ingredient: 'Lemon Juice',
        order: 3,
        measure: '1/4 Shot',
      },
      {
        recipeId: 17222,
        ingredient: 'Grenadine',
        order: 4,
        measure: '1/8 Shot',
      },
      { recipeId: 17225, ingredient: 'Gin', order: 1, measure: '2 shots ' },
      {
        recipeId: 17225,
        ingredient: 'Grenadine',
        order: 2,
        measure: '1/2 shot ',
      },
      {
        recipeId: 17225,
        ingredient: 'Heavy cream',
        order: 3,
        measure: '1/2 shot ',
      },
      { recipeId: 17225, ingredient: 'Milk', order: 4, measure: '1/2 shot' },
      {
        recipeId: 17225,
        ingredient: 'Egg White',
        order: 5,
        measure: '1/2 Fresh',
      },
      { recipeId: 17253, ingredient: 'Grape Soda', order: 1, measure: '3 oz' },
      { recipeId: 17253, ingredient: 'Tequila', order: 2, measure: '1 1/2 oz' },
      {
        recipeId: 17254,
        ingredient: 'Orange Bitters',
        order: 1,
        measure: '1 dash',
      },
      {
        recipeId: 17254,
        ingredient: 'Green Chartreuse',
        order: 2,
        measure: '1 oz',
      },
      { recipeId: 17254, ingredient: 'Gin', order: 3, measure: '1 oz' },
      {
        recipeId: 17254,
        ingredient: 'Sweet Vermouth',
        order: 4,
        measure: '1 oz',
      },
      {
        recipeId: 17833,
        ingredient: 'Applejack',
        order: 1,
        measure: '1 1/2 oz ',
      },
      {
        recipeId: 17833,
        ingredient: 'Grapefruit juice',
        order: 2,
        measure: '1 oz ',
      },
      { recipeId: 17837, ingredient: 'Dark rum', order: 1, measure: '2 oz ' },
      {
        recipeId: 17837,
        ingredient: 'Lemon juice',
        order: 2,
        measure: '1 oz ',
      },
      { recipeId: 17837, ingredient: 'Grenadine', order: 3, measure: '1 tsp ' },
    ],
  });
}
