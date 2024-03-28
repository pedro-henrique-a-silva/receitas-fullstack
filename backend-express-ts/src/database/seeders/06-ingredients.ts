import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('ingredients', [
      { recipe_id: 52769, ingredient: 'Fries', order: 1, measure: '250 Grams' },
      {
        recipe_id: 52769,
        ingredient: 'Doner Meat',
        order: 2,
        measure: '500 Grams',
      },
      {
        recipe_id: 52769,
        ingredient: 'Garlic sauce',
        order: 3,
        measure: 'Topping',
      },
      { recipe_id: 52769, ingredient: 'Hotsauce', order: 4, measure: 'Topping' },
      { recipe_id: 52769, ingredient: 'Lettuce', order: 5, measure: '1 Bulb' },
      { recipe_id: 52769, ingredient: 'Tomato', order: 6, measure: '1' },
      { recipe_id: 52769, ingredient: 'Cucumber', order: 7, measure: '3rd' },
      {
        recipe_id: 52769,
        ingredient: 'Gouda cheese',
        order: 8,
        measure: '100 Grams',
      },
      { recipe_id: 52785, ingredient: 'Toor dal', order: 1, measure: '1 cup' },
      { recipe_id: 52785, ingredient: 'Water', order: 2, measure: '2-1/2 cups' },
      { recipe_id: 52785, ingredient: 'Salt', order: 3, measure: '1 tsp' },
      { recipe_id: 52785, ingredient: 'Turmeric', order: 4, measure: '1/4 tsp' },
      { recipe_id: 52785, ingredient: 'Ghee', order: 5, measure: '3 tbs' },
      {
        recipe_id: 52785,
        ingredient: 'Chopped tomatoes',
        order: 6,
        measure: '1 cup',
      },
      {
        recipe_id: 52785,
        ingredient: 'Cumin seeds',
        order: 7,
        measure: '1/2 tsp',
      },
      {
        recipe_id: 52785,
        ingredient: 'Mustard Seeds',
        order: 8,
        measure: '1/2 tsp',
      },
      { recipe_id: 52785, ingredient: 'Bay Leaf', order: 9, measure: '2' },
      {
        recipe_id: 52785,
        ingredient: 'Green Chili',
        order: 10,
        measure: '1 tbs chopped',
      },
      {
        recipe_id: 52785,
        ingredient: 'Ginger',
        order: 11,
        measure: '2 tsp shredded',
      },
      { recipe_id: 52785, ingredient: 'Cilantro', order: 12, measure: '2 tbs ' },
      {
        recipe_id: 52785,
        ingredient: 'Red Pepper',
        order: 13,
        measure: '1/2 tsp',
      },
      { recipe_id: 52785, ingredient: 'Salt', order: 14, measure: '1/2 tsp' },
      { recipe_id: 52785, ingredient: 'Sugar', order: 15, measure: '1 tsp' },
      {
        recipe_id: 52785,
        ingredient: 'Garam Masala',
        order: 16,
        measure: '1/4 tsp',
      },
      {
        recipe_id: 52802,
        ingredient: 'Floury Potatoes',
        order: 1,
        measure: '900g',
      },
      { recipe_id: 52802, ingredient: 'Olive Oil', order: 2, measure: '2 tbsp' },
      {
        recipe_id: 52802,
        ingredient: 'Semi-skimmed Milk',
        order: 3,
        measure: '600ml',
      },
      {
        recipe_id: 52802,
        ingredient: 'White Fish Fillets',
        order: 4,
        measure: '800g',
      },
      {
        recipe_id: 52802,
        ingredient: 'Plain flour',
        order: 5,
        measure: '1 tbsp',
      },
      { recipe_id: 52802, ingredient: 'Nutmeg', order: 6, measure: 'Grating' },
      {
        recipe_id: 52802,
        ingredient: 'Double Cream',
        order: 7,
        measure: '3 tbsp',
      },
      {
        recipe_id: 52802,
        ingredient: 'Jerusalem Artichokes',
        order: 8,
        measure: '200g',
      },
      {
        recipe_id: 52802,
        ingredient: 'Leek',
        order: 9,
        measure: '1 finely sliced',
      },
      {
        recipe_id: 52802,
        ingredient: 'Prawns',
        order: 10,
        measure: '200g peeled raw',
      },
      {
        recipe_id: 52802,
        ingredient: 'Parsley',
        order: 11,
        measure: 'Large handful',
      },
      { recipe_id: 52802, ingredient: 'Dill', order: 12, measure: 'Handful' },
      {
        recipe_id: 52802,
        ingredient: 'Lemon',
        order: 13,
        measure: 'Grated zest of 1',
      },
      {
        recipe_id: 52802,
        ingredient: 'Gruyère',
        order: 14,
        measure: '25g grated',
      },
      {
        recipe_id: 52802,
        ingredient: 'Lemon',
        order: 15,
        measure: 'Juice of 1',
      },
      {
        recipe_id: 52804,
        ingredient: 'Vegetable Oil',
        order: 1,
        measure: 'Dash',
      },
      { recipe_id: 52804, ingredient: 'Beef Gravy', order: 2, measure: '1 Can' },
      {
        recipe_id: 52804,
        ingredient: 'Potatoes',
        order: 3,
        measure: '5 thin cut',
      },
      {
        recipe_id: 52804,
        ingredient: 'Cheese Curds',
        order: 4,
        measure: '2 cups',
      },
      {
        recipe_id: 52811,
        ingredient: 'Olive Oil',
        order: 1,
        measure: '5 tablespoons',
      },
      { recipe_id: 52811, ingredient: 'Onion', order: 2, measure: '1 chopped' },
      { recipe_id: 52811, ingredient: 'Carrot', order: 3, measure: '1 chopped' },
      {
        recipe_id: 52811,
        ingredient: 'Celery',
        order: 4,
        measure: '1 stalk chopped',
      },
      {
        recipe_id: 52811,
        ingredient: 'Garlic',
        order: 5,
        measure: '1 tablespoon minced',
      },
      {
        recipe_id: 52811,
        ingredient: 'Cannellini Beans',
        order: 6,
        measure: '2 cups',
      },
      {
        recipe_id: 52811,
        ingredient: 'Canned tomatoes',
        order: 7,
        measure: '1',
      },
      { recipe_id: 52811, ingredient: 'Water', order: 8, measure: '4 cups' },
      {
        recipe_id: 52811,
        ingredient: 'Rosemary',
        order: 9,
        measure: '1 fresh sprig',
      },
      {
        recipe_id: 52811,
        ingredient: 'Thyme',
        order: 10,
        measure: '1 fresh sprig',
      },
      {
        recipe_id: 52811,
        ingredient: 'Kale',
        order: 11,
        measure: '1 pound chopped',
      },
      {
        recipe_id: 52811,
        ingredient: 'Wholegrain Bread',
        order: 12,
        measure: '4 thick slices',
      },
      {
        recipe_id: 52811,
        ingredient: 'Red Onion',
        order: 13,
        measure: '1 thinly sliced',
      },
      {
        recipe_id: 52811,
        ingredient: 'Parmesan',
        order: 14,
        measure: '½ cup freshly grated',
      },
      {
        recipe_id: 52844,
        ingredient: 'Olive Oil',
        order: 1,
        measure: '1 tblsp ',
      },
      { recipe_id: 52844, ingredient: 'Bacon', order: 2, measure: '2' },
      {
        recipe_id: 52844,
        ingredient: 'Onion',
        order: 3,
        measure: '1 finely chopped ',
      },
      { recipe_id: 52844, ingredient: 'Celery', order: 4, measure: '1 Stick' },
      { recipe_id: 52844, ingredient: 'Carrots', order: 5, measure: '1 medium' },
      {
        recipe_id: 52844,
        ingredient: 'Garlic',
        order: 6,
        measure: '2 cloves chopped',
      },
      { recipe_id: 52844, ingredient: 'Minced Beef', order: 7, measure: '500g' },
      {
        recipe_id: 52844,
        ingredient: 'Tomato Puree',
        order: 8,
        measure: '1 tbls',
      },
      {
        recipe_id: 52844,
        ingredient: 'Chopped Tomatoes',
        order: 9,
        measure: '800g',
      },
      { recipe_id: 52844, ingredient: 'Honey', order: 10, measure: '1 tblsp ' },
      {
        recipe_id: 52844,
        ingredient: 'Lasagne Sheets',
        order: 11,
        measure: '500g',
      },
      {
        recipe_id: 52844,
        ingredient: 'Creme Fraiche',
        order: 12,
        measure: '400ml',
      },
      {
        recipe_id: 52844,
        ingredient: 'Mozzarella Balls',
        order: 13,
        measure: '125g',
      },
      {
        recipe_id: 52844,
        ingredient: 'Parmesan Cheese',
        order: 14,
        measure: '50g',
      },
      {
        recipe_id: 52844,
        ingredient: 'Basil Leaves',
        order: 15,
        measure: 'Topping',
      },
      { recipe_id: 52854, ingredient: 'Flour', order: 1, measure: '100g ' },
      { recipe_id: 52854, ingredient: 'Eggs', order: 2, measure: '2 large' },
      { recipe_id: 52854, ingredient: 'Milk', order: 3, measure: '300ml ' },
      {
        recipe_id: 52854,
        ingredient: 'Sunflower Oil',
        order: 4,
        measure: '1 tbls',
      },
      { recipe_id: 52854, ingredient: 'Sugar', order: 5, measure: 'to serve' },
      {
        recipe_id: 52854,
        ingredient: 'Raspberries',
        order: 6,
        measure: 'to serve',
      },
      {
        recipe_id: 52854,
        ingredient: 'Blueberries',
        order: 7,
        measure: 'to serve',
      },
      {
        recipe_id: 52887,
        ingredient: 'Smoked Haddock',
        order: 1,
        measure: '300g',
      },
      { recipe_id: 52887, ingredient: 'Bay Leaves', order: 2, measure: '2' },
      { recipe_id: 52887, ingredient: 'Milk', order: 3, measure: '300ml ' },
      { recipe_id: 52887, ingredient: 'Eggs', order: 4, measure: '4' },
      { recipe_id: 52887, ingredient: 'Parsley', order: 5, measure: 'Handful' },
      {
        recipe_id: 52887,
        ingredient: 'Coriander',
        order: 6,
        measure: 'Handful',
      },
      {
        recipe_id: 52887,
        ingredient: 'Vegetable Oil',
        order: 7,
        measure: '2 tbs',
      },
      { recipe_id: 52887, ingredient: 'Onion', order: 8, measure: '1 chopped' },
      { recipe_id: 52887, ingredient: 'Coriander', order: 9, measure: '1 tsp ' },
      {
        recipe_id: 52887,
        ingredient: 'Curry Powder',
        order: 10,
        measure: '2 tsp',
      },
      { recipe_id: 52887, ingredient: 'Rice', order: 11, measure: '300g' },
      { recipe_id: 52906, ingredient: 'Butter', order: 1, measure: '75g' },
      { recipe_id: 52906, ingredient: 'Leek', order: 2, measure: '1kg' },
      { recipe_id: 52906, ingredient: 'Salt', order: 3, measure: '½ tsp' },
      {
        recipe_id: 52906,
        ingredient: 'Creme Fraiche',
        order: 4,
        measure: '300ml ',
      },
      { recipe_id: 52906, ingredient: 'Egg', order: 5, measure: '1' },
      { recipe_id: 52906, ingredient: 'Egg Yolks', order: 6, measure: '3' },
      {
        recipe_id: 52906,
        ingredient: 'Nutmeg',
        order: 7,
        measure: '¼ teaspoon',
      },
      { recipe_id: 52906, ingredient: 'Plain Flour', order: 8, measure: '225g' },
      { recipe_id: 52906, ingredient: 'Salt', order: 9, measure: '½ tsp' },
      { recipe_id: 52906, ingredient: 'Butter', order: 10, measure: '60g' },
      { recipe_id: 52906, ingredient: 'Lard', order: 11, measure: '60g' },
      {
        recipe_id: 52906,
        ingredient: 'Cheddar Cheese',
        order: 12,
        measure: '50g',
      },
      { recipe_id: 52906, ingredient: 'Water', order: 13, measure: '2 tbs' },
      { recipe_id: 52929, ingredient: 'Flour', order: 1, measure: '2 cups ' },
      { recipe_id: 52929, ingredient: 'Sugar', order: 2, measure: '1/3 cup' },
      {
        recipe_id: 52929,
        ingredient: 'Baking Powder',
        order: 3,
        measure: '3 tsp',
      },
      { recipe_id: 52929, ingredient: 'Salt', order: 4, measure: '½ tsp' },
      { recipe_id: 52929, ingredient: 'Egg', order: 5, measure: '1 beaten' },
      { recipe_id: 52929, ingredient: 'Milk', order: 6, measure: '¾ cup' },
      { recipe_id: 52929, ingredient: 'Oil', order: 7, measure: '3 tbs' },
      { recipe_id: 52929, ingredient: 'Oil', order: 8, measure: 'for frying' },
      {
        recipe_id: 52929,
        ingredient: 'Icing Sugar',
        order: 9,
        measure: 'garnish',
      },
      {
        recipe_id: 52931,
        ingredient: 'Brown Sugar',
        order: 1,
        measure: '2 cups ',
      },
      { recipe_id: 52931, ingredient: 'Butter', order: 2, measure: '¼ cup' },
      { recipe_id: 52931, ingredient: 'Eggs', order: 3, measure: '2' },
      {
        recipe_id: 52931,
        ingredient: 'Vanilla Extract',
        order: 4,
        measure: '1 tsp ',
      },
      { recipe_id: 52931, ingredient: 'Salt', order: 5, measure: '1 tsp ' },
      {
        recipe_id: 52931,
        ingredient: 'Plain Flour',
        order: 6,
        measure: '½ cup ',
      },
      { recipe_id: 52931, ingredient: 'Milk', order: 7, measure: '1 1/2 cups ' },
      { recipe_id: 52948, ingredient: 'Pork', order: 1, measure: '1lb' },
      {
        recipe_id: 52948,
        ingredient: 'Garlic Clove',
        order: 2,
        measure: '3 chopped',
      },
      { recipe_id: 52948, ingredient: 'Ginger', order: 3, measure: '1 tsp ' },
      { recipe_id: 52948, ingredient: 'Soy Sauce', order: 4, measure: '1 tbs' },
      {
        recipe_id: 52948,
        ingredient: 'Sesame Seed Oil',
        order: 5,
        measure: '1 tsp ',
      },
      {
        recipe_id: 52948,
        ingredient: 'Carrots',
        order: 6,
        measure: '3 finely chopped',
      },
      {
        recipe_id: 52948,
        ingredient: 'Celery',
        order: 7,
        measure: '3 finely chopped',
      },
      {
        recipe_id: 52948,
        ingredient: 'Spring Onions',
        order: 8,
        measure: '6 chopped',
      },
      {
        recipe_id: 52948,
        ingredient: 'Wonton Skin',
        order: 9,
        measure: '1 Packet',
      },
      { recipe_id: 52948, ingredient: 'Oil', order: 10, measure: 'Fry' },
      { recipe_id: 52948, ingredient: 'Water', order: 11, measure: 'Bottle' },
      { recipe_id: 52963, ingredient: 'Olive Oil', order: 1, measure: '1 tbs' },
      {
        recipe_id: 52963,
        ingredient: 'Red Onions',
        order: 2,
        measure: '2 chopped',
      },
      {
        recipe_id: 52963,
        ingredient: 'Red Chilli',
        order: 3,
        measure: '1 finely chopped ',
      },
      { recipe_id: 52963, ingredient: 'Garlic', order: 4, measure: '1 clove' },
      {
        recipe_id: 52963,
        ingredient: 'Coriander',
        order: 5,
        measure: 'Chopped',
      },
      {
        recipe_id: 52963,
        ingredient: 'Cherry Tomatoes',
        order: 6,
        measure: '800g',
      },
      {
        recipe_id: 52963,
        ingredient: 'Caster Sugar',
        order: 7,
        measure: '1 tbs',
      },
      { recipe_id: 52963, ingredient: 'Eggs', order: 8, measure: '4' },
      { recipe_id: 52963, ingredient: 'Feta', order: 9, measure: 'Spinkling' },
      { recipe_id: 52971, ingredient: 'Potatoes', order: 1, measure: '5 Large' },
      { recipe_id: 52971, ingredient: 'Olive Oil', order: 2, measure: '2 tbs' },
      { recipe_id: 52971, ingredient: 'Green Pepper', order: 3, measure: '1' },
      { recipe_id: 52971, ingredient: 'Onions', order: 4, measure: '5' },
      {
        recipe_id: 52971,
        ingredient: 'Ras el hanout',
        order: 5,
        measure: '1 tbs',
      },
      { recipe_id: 52971, ingredient: 'Pumpkin', order: 6, measure: '500g' },
      { recipe_id: 52971, ingredient: 'Eggs', order: 7, measure: '24 Skinned' },
      { recipe_id: 52971, ingredient: 'Salt', order: 8, measure: 'Pinch' },
      { recipe_id: 52971, ingredient: 'Pepper', order: 9, measure: 'Pinch' },
      { recipe_id: 52977, ingredient: 'Lentils', order: 1, measure: '1 cup ' },
      { recipe_id: 52977, ingredient: 'Onion', order: 2, measure: '1 large' },
      { recipe_id: 52977, ingredient: 'Carrots', order: 3, measure: '1 large' },
      {
        recipe_id: 52977,
        ingredient: 'Tomato Puree',
        order: 4,
        measure: '1 tbs',
      },
      { recipe_id: 52977, ingredient: 'Cumin', order: 5, measure: '2 tsp' },
      { recipe_id: 52977, ingredient: 'Paprika', order: 6, measure: '1 tsp ' },
      { recipe_id: 52977, ingredient: 'Mint', order: 7, measure: '1/2 tsp' },
      { recipe_id: 52977, ingredient: 'Thyme', order: 8, measure: '1/2 tsp' },
      {
        recipe_id: 52977,
        ingredient: 'Black Pepper',
        order: 9,
        measure: '1/4 tsp',
      },
      {
        recipe_id: 52977,
        ingredient: 'Red Pepper Flakes',
        order: 10,
        measure: '1/4 tsp',
      },
      {
        recipe_id: 52977,
        ingredient: 'Vegetable Stock',
        order: 11,
        measure: '4 cups ',
      },
      { recipe_id: 52977, ingredient: 'Water', order: 12, measure: '1 cup ' },
      { recipe_id: 52977, ingredient: 'Sea Salt', order: 13, measure: 'Pinch' },
      { recipe_id: 52978, ingredient: 'Potatoes', order: 1, measure: '2 large' },
      { recipe_id: 52978, ingredient: 'Butter', order: 2, measure: '2 tbs' },
      { recipe_id: 52978, ingredient: 'Cheese', order: 3, measure: '150g' },
      { recipe_id: 52978, ingredient: 'Onion', order: 4, measure: '1 large' },
      {
        recipe_id: 52978,
        ingredient: 'Red Pepper',
        order: 5,
        measure: '1 large',
      },
      {
        recipe_id: 52978,
        ingredient: 'Red Chile Flakes',
        order: 6,
        measure: 'Pinch',
      },
      { recipe_id: 52980, ingredient: 'Potatoes', order: 1, measure: '1.5kg' },
      {
        recipe_id: 52980,
        ingredient: 'Bay Leaf',
        order: 2,
        measure: '2 leaves',
      },
      { recipe_id: 52980, ingredient: 'Shallots', order: 3, measure: '2' },
      { recipe_id: 52980, ingredient: 'Butter', order: 4, measure: '3 tbs' },
      { recipe_id: 52980, ingredient: 'Kale', order: 5, measure: '750g' },
      { recipe_id: 52980, ingredient: 'Sausages', order: 6, measure: '2' },
      { recipe_id: 52980, ingredient: 'Milk', order: 7, measure: '500ml' },
      { recipe_id: 52980, ingredient: 'Nutmeg', order: 8, measure: 'Grated' },
      { recipe_id: 52980, ingredient: 'Salt', order: 9, measure: 'Pinch' },
      { recipe_id: 52980, ingredient: 'Pepper', order: 10, measure: 'Pinch' },
      { recipe_id: 53006, ingredient: 'Beef', order: 1, measure: '500g' },
      {
        recipe_id: 53006,
        ingredient: 'Aubergine',
        order: 2,
        measure: '1 large',
      },
      {
        recipe_id: 53006,
        ingredient: 'Greek Yogurt',
        order: 3,
        measure: '150g',
      },
      { recipe_id: 53006, ingredient: 'Egg', order: 4, measure: '1 beaten' },
      { recipe_id: 53006, ingredient: 'Parmesan', order: 5, measure: '3 tbs' },
      { recipe_id: 53006, ingredient: 'Tomato', order: 6, measure: '400g' },
      {
        recipe_id: 53006,
        ingredient: 'Tomato Puree',
        order: 7,
        measure: '4 tbs',
      },
      { recipe_id: 53006, ingredient: 'Potatoes', order: 8, measure: '350g' },
      { recipe_id: 53013, ingredient: 'Minced Beef', order: 1, measure: '400g' },
      { recipe_id: 53013, ingredient: 'Olive Oil', order: 2, measure: '2 tbs' },
      {
        recipe_id: 53013,
        ingredient: 'Sesame Seed Burger Buns',
        order: 3,
        measure: '2',
      },
      { recipe_id: 53013, ingredient: 'Onion', order: 4, measure: 'Chopped' },
      {
        recipe_id: 53013,
        ingredient: 'Iceberg Lettuce',
        order: 5,
        measure: '1/4 ',
      },
      { recipe_id: 53013, ingredient: 'Cheese', order: 6, measure: '2 sliced' },
      {
        recipe_id: 53013,
        ingredient: 'Dill Pickles',
        order: 7,
        measure: '2 large',
      },
      {
        recipe_id: 53013,
        ingredient: 'Mayonnaise',
        order: 8,
        measure: '1 cup ',
      },
      {
        recipe_id: 53013,
        ingredient: 'White Wine Vinegar',
        order: 9,
        measure: '2 tsp',
      },
      { recipe_id: 53013, ingredient: 'Pepper', order: 10, measure: 'Pinch' },
      { recipe_id: 53013, ingredient: 'Mustard', order: 11, measure: '2 tsp' },
      {
        recipe_id: 53013,
        ingredient: 'Onion Salt',
        order: 12,
        measure: '1 1/2 tsp ',
      },
      {
        recipe_id: 53013,
        ingredient: 'Garlic Powder',
        order: 13,
        measure: '1 1/2 tsp ',
      },
      { recipe_id: 53013, ingredient: 'Paprika', order: 14, measure: '1/2 tsp' },
      {
        recipe_id: 53026,
        ingredient: 'Broad Beans',
        order: 1,
        measure: '3 cups ',
      },
      { recipe_id: 53026, ingredient: 'Spring Onions', order: 2, measure: '6' },
      { recipe_id: 53026, ingredient: 'Garlic Clove', order: 3, measure: '4' },
      { recipe_id: 53026, ingredient: 'Parsley', order: 4, measure: '1/4 cup' },
      { recipe_id: 53026, ingredient: 'Cumin', order: 5, measure: '2 tsp' },
      {
        recipe_id: 53026,
        ingredient: 'Baking Powder',
        order: 6,
        measure: '1 tsp ',
      },
      {
        recipe_id: 53026,
        ingredient: 'Cayenne Pepper',
        order: 7,
        measure: '1/2 tsp',
      },
      { recipe_id: 53026, ingredient: 'Flour', order: 8, measure: 'Spinkling' },
      {
        recipe_id: 53026,
        ingredient: 'Vegetable Oil',
        order: 9,
        measure: 'As required',
      },
      {
        recipe_id: 53027,
        ingredient: 'Brown Lentils',
        order: 1,
        measure: '1 1/2 cups ',
      },
      { recipe_id: 53027, ingredient: 'Rice', order: 2, measure: '1 1/2 cups ' },
      {
        recipe_id: 53027,
        ingredient: 'Coriander',
        order: 3,
        measure: '1/2 tsp',
      },
      { recipe_id: 53027, ingredient: 'Macaroni', order: 4, measure: '2 cups ' },
      { recipe_id: 53027, ingredient: 'Chickpeas', order: 5, measure: 'Can' },
      { recipe_id: 53027, ingredient: 'Onion', order: 6, measure: '1 large' },
      { recipe_id: 53027, ingredient: 'Salt', order: 7, measure: 'Sprinking' },
      {
        recipe_id: 53027,
        ingredient: 'Vegetable Oil',
        order: 8,
        measure: '1/2 cup ',
      },
      {
        recipe_id: 53028,
        ingredient: 'Chicken Thighs',
        order: 1,
        measure: '1 kg',
      },
      { recipe_id: 53028, ingredient: 'Coriander', order: 2, measure: '1 tbs' },
      { recipe_id: 53028, ingredient: 'Cumin', order: 3, measure: '1 tbs' },
      { recipe_id: 53028, ingredient: 'Cardamom', order: 4, measure: '1 tbs' },
      {
        recipe_id: 53028,
        ingredient: 'Cayenne Pepper',
        order: 5,
        measure: '1 tsp ',
      },
      { recipe_id: 53028, ingredient: 'Paprika', order: 6, measure: '2 tsp' },
      {
        recipe_id: 53028,
        ingredient: 'Lemon Juice',
        order: 7,
        measure: '2 tbs',
      },
      { recipe_id: 53028, ingredient: 'Olive Oil', order: 8, measure: '3 tbs' },
      {
        recipe_id: 53028,
        ingredient: 'Greek Yogurt',
        order: 9,
        measure: '1 cup ',
      },
      { recipe_id: 53028, ingredient: 'Garlic Clove', order: 10, measure: '1' },
      { recipe_id: 53028, ingredient: 'Cumin', order: 11, measure: '1 tsp ' },
      {
        recipe_id: 53028,
        ingredient: 'Lemon Juice',
        order: 12,
        measure: 'Splash',
      },
      { recipe_id: 53028, ingredient: 'Lettuce', order: 13, measure: 'Sliced' },
      { recipe_id: 53028, ingredient: 'Tomato', order: 14, measure: 'Sliced' },
      { recipe_id: 53028, ingredient: 'Pita Bread', order: 15, measure: '6' },
      {
        recipe_id: 53060,
        ingredient: 'Filo Pastry',
        order: 1,
        measure: '1 Packet',
      },
      { recipe_id: 53060, ingredient: 'Minced Beef', order: 2, measure: '150g' },
      { recipe_id: 53060, ingredient: 'Onion', order: 3, measure: '150g' },
      { recipe_id: 53060, ingredient: 'Oil', order: 4, measure: '40g' },
      { recipe_id: 53060, ingredient: 'Salt', order: 5, measure: 'Dash' },
      { recipe_id: 53060, ingredient: 'Pepper', order: 6, measure: 'Dash' },
      {
        recipe_id: 53065,
        ingredient: 'Sushi Rice',
        order: 1,
        measure: '300ml ',
      },
      { recipe_id: 53065, ingredient: 'Rice wine', order: 2, measure: '100ml' },
      {
        recipe_id: 53065,
        ingredient: 'Caster Sugar',
        order: 3,
        measure: '2 tbs',
      },
      { recipe_id: 53065, ingredient: 'Mayonnaise', order: 4, measure: '3 tbs' },
      { recipe_id: 53065, ingredient: 'Rice wine', order: 5, measure: '1 tbs' },
      { recipe_id: 53065, ingredient: 'Soy Sauce', order: 6, measure: '1 tbs' },
      { recipe_id: 53065, ingredient: 'Cucumber', order: 7, measure: '1' },
      { recipe_id: 53069, ingredient: 'Beef', order: 1, measure: '1 lb' },
      {
        recipe_id: 53069,
        ingredient: 'Soy Sauce',
        order: 2,
        measure: '5 tablespoons',
      },
      { recipe_id: 53069, ingredient: 'Lemon', order: 3, measure: '1' },
      { recipe_id: 53069, ingredient: 'Garlic', order: 4, measure: '3 cloves' },
      { recipe_id: 53069, ingredient: 'Onion', order: 5, measure: '3 parts ' },
      { recipe_id: 53069, ingredient: 'Olive Oil', order: 6, measure: '4 tbs' },
      { recipe_id: 53069, ingredient: 'Water', order: 7, measure: '1 cup ' },
      { recipe_id: 53069, ingredient: 'Salt', order: 8, measure: '1 pinch' },
      { recipe_id: 12450, ingredient: 'Gin', order: 1, measure: '1 1/2 oz ' },
      {
        recipe_id: 12450,
        ingredient: 'Sweet Vermouth',
        order: 2,
        measure: '1/2 oz ',
      },
      { recipe_id: 12450, ingredient: 'Brandy', order: 3, measure: '1/2 oz ' },
      { recipe_id: 12764, ingredient: 'Coffee', order: 1, measure: '1 part ' },
      {
        recipe_id: 12764,
        ingredient: 'Grain alcohol',
        order: 2,
        measure: '2 parts ',
      },
      {
        recipe_id: 12776,
        ingredient: 'Espresso',
        order: 1,
        measure: 'Unsweetened ',
      },
      { recipe_id: 12776, ingredient: 'Honey', order: 2 },
      {
        recipe_id: 12776,
        ingredient: 'Cocoa powder',
        order: 3,
      },
      { recipe_id: 13128, ingredient: 'Lager', order: 1, measure: '1/2 pint ' },
      { recipe_id: 13128, ingredient: 'Cider', order: 2, measure: '1/2 pint ' },
      {
        recipe_id: 13128,
        ingredient: 'Blackcurrant cordial',
        order: 3,
        measure: '1 dash ',
      },
      { recipe_id: 13332, ingredient: 'Kahlua', order: 1, measure: '1/3 shot ' },
      {
        recipe_id: 13332,
        ingredient: 'Sambuca',
        order: 2,
        measure: '1/3 shot ',
      },
      {
        recipe_id: 13332,
        ingredient: 'Grand Marnier',
        order: 3,
        measure: '1/3 shot ',
      },
      { recipe_id: 13501, ingredient: 'Amaretto', order: 1, measure: '1/3 ' },
      {
        recipe_id: 13501,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '1/3 ',
      },
      { recipe_id: 13501, ingredient: 'Cognac', order: 3, measure: '1/3 ' },
      {
        recipe_id: 13938,
        ingredient: 'Absolut Vodka',
        order: 1,
        measure: '1 oz ',
      },
      { recipe_id: 13938, ingredient: 'Gin', order: 2, measure: '1 oz ' },
      {
        recipe_id: 13938,
        ingredient: 'Tonic water',
        order: 3,
        measure: '4 oz ',
      },
      { recipe_id: 14229, ingredient: 'Kahlua', order: 1, measure: '1/3 part ' },
      {
        recipe_id: 14229,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '1/3 part ',
      },
      {
        recipe_id: 14229,
        ingredient: 'Frangelico',
        order: 3,
        measure: '1/3 part ',
      },
      {
        recipe_id: 14598,
        ingredient: 'Vanilla vodka',
        order: 1,
        measure: '2 1/2 oz ',
      },
      {
        recipe_id: 14598,
        ingredient: 'Grand Marnier',
        order: 2,
        measure: '1 splash ',
      },
      {
        recipe_id: 14598,
        ingredient: 'Orange juice',
        order: 3,
        measure: 'Fill with ',
      },
      {
        recipe_id: 14610,
        ingredient: '151 proof rum',
        order: 1,
        measure: '1 oz Bacardi ',
      },
      {
        recipe_id: 14610,
        ingredient: 'Wild Turkey',
        order: 2,
        measure: '1 oz ',
      },
      {
        recipe_id: 15288,
        ingredient: '151 proof rum',
        order: 1,
        measure: '1/2 shot Bacardi ',
      },
      {
        recipe_id: 15288,
        ingredient: 'Wild Turkey',
        order: 2,
        measure: '1/2 shot ',
      },
      { recipe_id: 15328, ingredient: 'Sambuca', order: 1, measure: '2 cl ' },
      {
        recipe_id: 15328,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '2 cl ',
      },
      {
        recipe_id: 15328,
        ingredient: 'White Creme de Menthe',
        order: 3,
        measure: '2 cl ',
      },
      {
        recipe_id: 15997,
        ingredient: 'Galliano',
        order: 1,
        measure: '2 1/2 shots ',
      },
      { recipe_id: 15997, ingredient: 'Ginger ale', order: 2 },
      { recipe_id: 15997, ingredient: 'Ice', order: 3 },
      { recipe_id: 16262, ingredient: 'Whisky', order: 1, measure: '4 cl ' },
      {
        recipe_id: 16262,
        ingredient: 'Baileys irish cream',
        order: 2,
        measure: '8 cl ',
      },
      { recipe_id: 16262, ingredient: 'Coffee', order: 3 },
      {
        recipe_id: 17141,
        ingredient: 'Red wine',
        order: 1,
        measure: '1/3 part ',
      },
      {
        recipe_id: 17141,
        ingredient: 'Peach schnapps',
        order: 2,
        measure: '1 shot ',
      },
      {
        recipe_id: 17141,
        ingredient: 'Pepsi Cola',
        order: 3,
        measure: '1/3 part ',
      },
      {
        recipe_id: 17141,
        ingredient: 'Orange juice',
        order: 4,
        measure: '1/3 part ',
      },
      { recipe_id: 17187, ingredient: 'gin', order: 1, measure: '6 cl' },
      {
        recipe_id: 17187,
        ingredient: 'Peach Bitters',
        order: 2,
        measure: '2 dashes',
      },
      {
        recipe_id: 17187,
        ingredient: 'Mint',
        order: 3,
        measure: '2 Fresh leaves',
      },
      {
        recipe_id: 17203,
        ingredient: 'Creme de Cassis',
        order: 1,
        measure: '1 part ',
      },
      {
        recipe_id: 17203,
        ingredient: 'Champagne',
        order: 2,
        measure: '5 parts ',
      },
      {
        recipe_id: 17208,
        ingredient: 'Dry Vermouth',
        order: 1,
        measure: '1/2 oz ',
      },
      { recipe_id: 17208, ingredient: 'Gin', order: 2, measure: '1 oz ' },
      {
        recipe_id: 17208,
        ingredient: 'Apricot brandy',
        order: 3,
        measure: '1/2 oz ',
      },
      {
        recipe_id: 17208,
        ingredient: 'Lemon juice',
        order: 4,
        measure: '1/2 tsp ',
      },
      { recipe_id: 17208, ingredient: 'Grenadine', order: 5, measure: '1 tsp ' },
      { recipe_id: 17208, ingredient: 'Powdered sugar', order: 6 },
      { recipe_id: 17222, ingredient: 'Gin', order: 1, measure: '1 3/4 shot ' },
      {
        recipe_id: 17222,
        ingredient: 'Grand Marnier',
        order: 2,
        measure: '1 Shot ',
      },
      {
        recipe_id: 17222,
        ingredient: 'Lemon Juice',
        order: 3,
        measure: '1/4 Shot',
      },
      {
        recipe_id: 17222,
        ingredient: 'Grenadine',
        order: 4,
        measure: '1/8 Shot',
      },
      { recipe_id: 17225, ingredient: 'Gin', order: 1, measure: '2 shots ' },
      {
        recipe_id: 17225,
        ingredient: 'Grenadine',
        order: 2,
        measure: '1/2 shot ',
      },
      {
        recipe_id: 17225,
        ingredient: 'Heavy cream',
        order: 3,
        measure: '1/2 shot ',
      },
      { recipe_id: 17225, ingredient: 'Milk', order: 4, measure: '1/2 shot' },
      {
        recipe_id: 17225,
        ingredient: 'Egg White',
        order: 5,
        measure: '1/2 Fresh',
      },
      { recipe_id: 17253, ingredient: 'Grape Soda', order: 1, measure: '3 oz' },
      { recipe_id: 17253, ingredient: 'Tequila', order: 2, measure: '1 1/2 oz' },
      {
        recipe_id: 17254,
        ingredient: 'Orange Bitters',
        order: 1,
        measure: '1 dash',
      },
      {
        recipe_id: 17254,
        ingredient: 'Green Chartreuse',
        order: 2,
        measure: '1 oz',
      },
      { recipe_id: 17254, ingredient: 'Gin', order: 3, measure: '1 oz' },
      {
        recipe_id: 17254,
        ingredient: 'Sweet Vermouth',
        order: 4,
        measure: '1 oz',
      },
      {
        recipe_id: 17833,
        ingredient: 'Applejack',
        order: 1,
        measure: '1 1/2 oz ',
      },
      {
        recipe_id: 17833,
        ingredient: 'Grapefruit juice',
        order: 2,
        measure: '1 oz ',
      },
      { recipe_id: 17837, ingredient: 'Dark rum', order: 1, measure: '2 oz ' },
      {
        recipe_id: 17837,
        ingredient: 'Lemon juice',
        order: 2,
        measure: '1 oz ',
      },
      { recipe_id: 17837, ingredient: 'Grenadine', order: 3, measure: '1 tsp ' },
     ])
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ingredients', {});
  },
};