import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function recipeSeed() {
  await prisma.recipe.createMany({
    data: [
      {
        id: 12450,
        strName: 'Victor',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'Shake all ingredients with ice, strain into a cocktail glass, and serve.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg',
      },
      {
        id: 12764,
        strName: 'Karsk',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball glass',
        strInstructions:
          'Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg',
      },
      {
        id: 12776,
        strName: 'Melya',
        categoryId: 21,
        recipeType: 'drink',
        strAlcoholic: 'Non alcoholic',
        strGlass: 'Coffee mug',
        strInstructions:
          'Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg',
      },
      {
        id: 13128,
        strName: 'Diesel',
        categoryId: 24,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Pint glass',
        strInstructions:
          'Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg',
      },
      {
        id: 13332,
        strName: 'B-53',
        categoryId: 20,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Collins Glass',
        strInstructions:
          'Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg',
      },
      {
        id: 13501,
        strName: 'ABC',
        categoryId: 20,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Shot glass',
        strInstructions: 'Layered in a shot glass.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
      },
      {
        id: 13938,
        strName: 'AT&T',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball Glass',
        strInstructions: 'Pour Vodka and Gin over ice, add Tonic and Stir',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg',
      },
      {
        id: 14229,
        strName: '747',
        categoryId: 20,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Shot glass',
        strInstructions:
          'pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
      },
      {
        id: 14598,
        strName: '50/50',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Collins Glass',
        strInstructions:
          'fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg',
      },
      {
        id: 14610,
        strName: 'ACID',
        categoryId: 20,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Shot glass',
        strInstructions:
          'Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg',
      },
      {
        id: 15288,
        strName: '252',
        categoryId: 20,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Shot glass',
        strInstructions:
          'Add both ingredients to shot glass, shoot, and get drunk quick',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg',
      },
      {
        id: 15328,
        strName: 'Zorro',
        categoryId: 21,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Coffee Mug',
        strInstructions:
          'add all and pour black coffee and add whipped cream on top.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg',
      },
      {
        id: 15997,
        strName: 'GG',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Optional alcohol',
        strGlass: 'Collins Glass',
        strInstructions:
          'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      },
      {
        id: 16262,
        strName: 'H.D.',
        categoryId: 21,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Beer mug',
        strInstructions:
          'Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg',
      },
      {
        id: 17141,
        strName: 'Smut',
        categoryId: 23,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Beer mug',
        strInstructions: 'Throw it all together and serve real cold.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg',
      },
      {
        id: 17187,
        strName: 'Derby',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg',
      },
      {
        id: 17203,
        strName: 'Kir',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Wine Glass',
        strInstructions:
          'Add the crème de cassis to the bottom of the glass, then top up with wine.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
      },
      {
        id: 17208,
        strName: 'Rose',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg',
      },
      {
        id: 17222,
        strName: 'A1',
        categoryId: 16,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
      },
      {
        id: 17225,
        strName: 'Ace',
        categoryId: 16,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Martini Glass',
        strInstructions:
          'Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg',
      },
      {
        id: 17253,
        strName: 'Paloma',
        categoryId: 16,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Collins glass',
        strInstructions: 'Stir together and serve over ice.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg',
      },
      {
        id: 17254,
        strName: 'Bijou',
        categoryId: 16,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Stir in mixing glass with ice and strain\r\n',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg',
      },
      {
        id: 17833,
        strName: 'A. J.',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'Shake ingredients with ice, strain into a cocktail glass, and serve.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg',
      },
      {
        id: 17837,
        strName: 'Adam',
        categoryId: 15,
        recipeType: 'drink',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.',
        strThumb:
          'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg',
      },
      {
        id: 52769,
        strName: 'Kapsalon',
        categoryId: 6,
        recipeType: 'meal',
        strArea: 'Dutch',
        strInstructions:
          "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.\r\nBake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish.\r\nCover the fries with a new layer of meat and spread evenly.\r\nAdd a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted.\r\nChop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union.\r\nDived the salad over the dish and Serve with garlicsauce and hot sauce",
        strThumb:
          'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
        strTags: 'Snack',
        strYoutube: 'https://www.youtube.com/watch?v=UIcuiU1kV8I',
      },
      {
        id: 52785,
        strName: 'Dal fry',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'Indian',
        strInstructions:
          'Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
        strTags: 'Curry,Vegetarian,Cake',
        strYoutube: 'https://www.youtube.com/watch?v=J4D855Q9-jg',
      },
      {
        id: 52802,
        strName: 'Fish pie',
        categoryId: 10,
        recipeType: 'meal',
        strArea: 'British',
        strInstructions:
          '01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
        strTags: 'Fish,Pie,Breakfast,Baking',
        strYoutube: 'https://www.youtube.com/watch?v=2sX4fCgg-UI',
      },
      {
        id: 52804,
        strName: 'Poutine',
        categoryId: 7,
        recipeType: 'meal',
        strArea: 'Canadian',
        strInstructions:
          'Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).\r\nWarm gravy in saucepan or microwave.\r\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\r\nRemove to a paper towel lined plate to drain.\r\nPlace the fries on a serving platter, and sprinkle the cheese over them.\r\nLadle gravy over the fries and cheese, and serve immediately.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
        strTags: 'UnHealthy,Speciality,HangoverFood',
        strYoutube: 'https://www.youtube.com/watch?v=UVAMAoA2_WU',
      },
      {
        id: 52811,
        strName: 'Ribollita',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'Italian',
        strInstructions:
          'Put 2 tablespoons of the oil in a large pot over medium heat. When it’s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes.\r\nHeat the oven to 500 degrees. Drain the beans; if they’re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes.\r\nFish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan.\r\nPut the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg',
        strTags: 'Vegetarian',
        strYoutube: 'https://www.youtube.com/watch?v=BiQUYTBb6eQ',
      },
      {
        id: 52844,
        strName: 'Lasagne',
        categoryId: 8,
        recipeType: 'meal',
        strArea: 'Italian',
        strInstructions:
          'Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.\r\nAdd the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.\r\nStir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.\r\nHeat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.\r\nPut the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=gfhfsBPt46s',
      },
      {
        id: 52854,
        strName: 'Pancakes',
        categoryId: 4,
        recipeType: 'meal',
        strArea: 'American',
        strInstructions:
          'Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.\r\nSet a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.\r\nServe with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg',
        strTags: 'Breakfast,Desert,Sweet,Fruity',
        strYoutube: 'https://www.youtube.com/watch?v=LWuuCndtJr0',
      },
      {
        id: 52887,
        strName: 'Kedgeree',
        categoryId: 10,
        recipeType: 'meal',
        strArea: 'British',
        strInstructions:
          'For the rice, heat the oil in a large, lidded pan, add the onion, then gently fry for 5 mins until softened but not coloured. Add the spices, season with salt, then continue to fry until the mix start to go brown and fragrant; about 3 mins.\r\nAdd the rice and stir in well. Add 600ml water, stir, then bring to the boil. Reduce to a simmer, then cover for 10 mins. Take off the heat and leave to stand, covered, for 10-15 mins more. The rice will be perfectly cooked if you do not lift the lid before the end of the cooking.\r\nMeanwhile, put the haddock and bay leaves in a frying pan, cover with the milk, then poach for 10 mins until the flesh flakes. Remove from the milk, peel away the skin, then flake the flesh into thumbsize pieces. Place the eggs in a pan, cover with water, bring to the boil, then reduce to a simmer. Leave for 4½-5 mins, plunge into cold water, then peel and cut the eggs into quarters. Gently mix the fish, eggs, parsley, coriander and rice together in the pan. Serve hot, sprinkled with a few extra herbs.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=_Pw1I1-SItE',
      },
      {
        id: 52906,
        strName: 'Flamiche',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'French',
        strInstructions:
          'For the pastry, sift the flour and salt into the bowl of a food processor, add the butter and lard, then whizz together briefly until the mixture looks like fine breadcrumbs. Tip the mixture into a bowl, then stir in the cheese and enough of the water for the mixture to come together. Tip out onto a lightly floured surface and knead briefly until smooth. Roll out thinly and line a 23cm x 4cm loose-?bottomed fluted flan tin. Prick the base with a fork. Chill for 20 minutes.\r\n02.Melt the 75g butter in a saucepan over a low heat, then add the leeks and the salt. Cover and cook for ?10 minutes until soft. Uncover the pan, increase the heat and cook ?for 2 minutes, stirring occasionally, until the liquid has evaporated. Spoon onto a plate and leave to cool.\r\n03.Preheat the oven to 200°C/fan180°C/gas 6. Line the pastry case with baking paper and baking beans or rice and blind bake for 15-20 minutes until the edges are biscuit-coloured. Remove the paper and beans/rice and return the case to the oven for 7-10 minutes until the base is crisp and lightly golden. Remove and set aside. Reduce the oven temperature to 190°C/fan170°C/gas 5.\r\n04.Put the crème fraîche into a bowl with the whole egg, egg yolks and nutmeg. Lightly beat together, then season. Stir in the leeks. Spoon ?the mixture into the tart case and bake for 35-40 minutes until set ?and lightly golden. Remove from ?the oven and leave for 10 minutes. Take out of the tin and serve.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg',
        strTags: 'Tart',
        strYoutube: 'https://www.youtube.com/watch?v=vT0q5c880Rg',
      },
      {
        id: 52929,
        strName: 'Timbits',
        categoryId: 4,
        recipeType: 'meal',
        strArea: 'Canadian',
        strInstructions:
          'Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides.\r\nRemove and drain.\r\nRoll in cinnamon sugar while still warm and serve.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
        strTags: 'Snack,Treat',
        strYoutube: 'https://www.youtube.com/watch?v=fFLn1h80AGQ',
      },
      {
        id: 52931,
        strName: 'Sugar Pie',
        categoryId: 4,
        recipeType: 'meal',
        strArea: 'Canadian',
        strInstructions:
          'Preheat oven to 350 degrees F (175 degrees C). Grease a 9-inch pie dish.\r\nPlace the brown sugar and butter in a mixing bowl, and beat them together with an electric mixer until creamy and very well combined, without lumps. Beat in eggs, one at a time, incorporating the first egg before adding the next one. Add the vanilla extract and salt; beat the flour in, a little at a time, and then the milk, making a creamy batter. Pour the batter into the prepared pie dish.\r\nBake in the preheated oven for 35 minutes; remove pie, and cover the rim with aluminum foil to prevent burning. Return to oven, and bake until the middle sets and the top forms a crusty layer, about 15 more minutes. Let the pie cool to room temperature, then refrigerate for at least 1 hour before serving.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg',
        strTags: 'Pie,Desert',
        strYoutube: 'https://www.youtube.com/watch?v=uVQ66jiL-Dc',
      },
      {
        id: 52948,
        strName: 'Wontons',
        categoryId: 9,
        recipeType: 'meal',
        strArea: 'Chinese',
        strInstructions:
          'Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl.\r\nSeparate wonton skins.\r\nPlace a heaping teaspoon of filling in the center of the wonton.\r\nBrush water on 2 borders of the skin, covering 1/4 inch from the edge.\r\nFold skin over to form a triangle, sealing edges.\r\nPinch the two long outside points together.\r\nHeat oil to 450 degrees and fry 4 to 5 at a time until golden.\r\nDrain and serve with sauce.',
        strThumb: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
        strTags: 'MainMeal',
        strYoutube: 'https://www.youtube.com/watch?v=9h9No18ZyCI',
      },
      {
        id: 52963,
        strName: 'Shakshuka',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'Egyptian',
        strInstructions:
          'Heat the oil in a frying pan that has a lid, then soften the onions, chilli, garlic and coriander stalks for 5 mins until soft. Stir in the tomatoes and sugar, then bubble for 8-10 mins until thick. Can be frozen for 1 month.\r\n\r\nUsing the back of a large spoon, make 4 dips in the sauce, then crack an egg into each one. Put a lid on the pan, then cook over a low heat for 6-8 mins, until the eggs are done to your liking. Scatter with the coriander leaves and serve with crusty bread.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/g373701551450225.jpg',
        strTags: 'Egg,Brunch,Breakfast',
        strYoutube: 'https://www.youtube.com/watch?v=C-3_jYrfdBU',
      },
      {
        id: 52971,
        strName: 'Kafteji',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'Tunisian',
        strInstructions:
          'Peel potatoes and cut into 5cm cubes.\r\nPour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain.\r\nCut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins.\r\nIn the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end.\r\nCut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper.\r\nPour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a large chopping board, add salt and pepper and chopped and mix everything with a big knife.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=-TFf-Zu-xQU',
      },
      {
        id: 52977,
        strName: 'Corba',
        categoryId: 11,
        recipeType: 'meal',
        strArea: 'Turkish',
        strInstructions:
          'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
        strTags: 'Soup',
        strYoutube: 'https://www.youtube.com/watch?v=VVnZd8A84z4',
      },
      {
        id: 52978,
        strName: 'Kumpir',
        categoryId: 11,
        recipeType: 'meal',
        strArea: 'Turkish',
        strInstructions:
          'If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly – you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).',
        strThumb:
          'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg',
        strTags: 'SideDish',
        strYoutube: 'https://www.youtube.com/watch?v=IEDEtZ4UVtI',
      },
      {
        id: 52980,
        strName: 'Stamppot',
        categoryId: 9,
        recipeType: 'meal',
        strArea: 'Dutch',
        strInstructions:
          "\r\nWash and peel the potatoes and cut into similarly sized pieces for even cooking.\r\n\r\nIn a large soup pot, boil the potatoes and the bay leaves in salted water for 20 minutes. Discard the bay leaves.\r\n\r\nIf you're not using a bag of ready-cut curly kale, wash the bunches thoroughly under cool running water to get rid of all soil—you wouldn't want that gritty texture in your finished dish. Trim any coarse stems and discard any brown leaves. With a sharp knife, cut the curly kale into thin strips.\r\n\r\nPeel and chop the shallots.\r\n\r\nIn a frying pan or skillet, melt 1 tbsp. of butter and saute the shallots for a few minutes before adding the curly kale and 2 tbsp. of water. Season and cook for about 10 minutes, or until tender.\r\n\r\nWarm the milk on the stove or in the microwave.\r\n\r\nDrain, shake and dry the potatoes with kitchen towels before mashing with a potato masher or ricer. Working quickly, add the warm milk and the remaining butter. Season to taste with nutmeg, salt, and pepper. \r\n\r\nMix the cooked curly kale through the cooked mashed potato mixture.\r\n\r\nTop with slices of the smoked sausage and serve hot with your favorite mustard or gravy.\r\n\r\nServe and enjoy!",
        strThumb:
          'https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg',
        strTags: 'Savory,Breakfast',
        strYoutube: 'https://www.youtube.com/watch?v=hTrSXryX31A',
      },
      {
        id: 53006,
        strName: 'Moussaka',
        categoryId: 1,
        recipeType: 'meal',
        strArea: 'Greek',
        strInstructions:
          'Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning.\r\n\r\nStir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=8U_29i9Qp5U',
      },
      {
        id: 53013,
        strName: 'Big Mac',
        categoryId: 1,
        recipeType: 'meal',
        strArea: 'American',
        strInstructions:
          'For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.\r\n2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties.\r\n3. Carefully slice each burger bun into three acrossways, then lightly toast.\r\n4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve.\r\n5. After waiting half an hour for your food to settle, go for a jog.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=C5J39YnnPsg',
      },
      {
        id: 53026,
        strName: 'Tamiya',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'Egyptian',
        strInstructions:
          'oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1½-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=mulqW-J3Yy4',
      },
      {
        id: 53027,
        strName: 'Koshari',
        categoryId: 14,
        recipeType: 'meal',
        strArea: 'Egyptian',
        strInstructions:
          'Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice).\r\nNow, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tbsp cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 1/2 inches (you’ll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so.\r\nNow make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain.\r\nCover the chickpeas and warm in the microwave briefly before serving.\r\n\r\nMake the crispy onion topping. \r\n\r\nSprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour.\r\nIn a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes).',
        strThumb:
          'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=y0d2ZMZBW4Y',
      },
      {
        id: 53028,
        strName: 'Shawarma',
        categoryId: 3,
        recipeType: 'meal',
        strArea: 'Egyptian',
        strInstructions:
          'Combine the marinade ingredients in a large ziplock bag (or bowl).\r\nAdd the chicken and use your hands to make sure each piece is coated. If using a ziplock bag, I find it convenient to close the bag then massage the bag to disperse the rub all over each chicken piece.\r\nMarinate overnight or up to 24 hours.\r\nCombine the Yoghurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge).\r\nHeat grill/BBQ (or large heavy based pan on stove) on medium high. You should not need to oil it because the marinade has oil in it and also thigh fillets have fat. But if you are worried then oil your hotplate/grill. (See notes for baking)\r\nPlace chicken on the grill and cook the first side for 4 to 5 minutes until nicely charred, then turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time).\r\nRemove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes.\r\nTO SERVE\r\nSlice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce.\r\nTo make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!',
        strThumb:
          'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=3lxUIeKDgic',
      },
      {
        id: 53060,
        strName: 'Burek',
        categoryId: 11,
        recipeType: 'meal',
        strArea: 'Croatian',
        strInstructions:
          'Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
        strTags: 'Streetfood, Onthego',
        strYoutube: 'https://www.youtube.com/watch?v=YsJXZwE5pdY',
      },
      {
        id: 53065,
        strName: 'Sushi',
        categoryId: 10,
        recipeType: 'meal',
        strArea: 'Japanese',
        strInstructions:
          'STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.',
        strThumb:
          'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=ub68OxEypaY',
      },
      {
        id: 53069,
        strName: 'Bistek',
        categoryId: 1,
        recipeType: 'meal',
        strArea: 'Filipino',
        strInstructions:
          '0.\tMarinate beef in soy sauce, lemon (or calamansi), and ground black pepper for at least 1 hour. Note: marinate overnight for best result\r\n1.\tHeat the cooking oil in a pan then pan-fry half of the onions until the texture becomes soft. Set aside\r\n2.\tDrain the marinade from the beef. Set it aside. Pan-fry the beef on the same pan where the onions were fried for 1 minute per side. Remove from the pan. Set aside\r\n3.\tAdd more oil if needed. Saute garlic and remaining raw onions until onion softens.\r\n4.\tPour the remaining marinade and water. Bring to a boil.\r\n5.\tAdd beef. Cover the pan and simmer until the meat is tender. Note: Add water as needed.\r\n6.\tSeason with ground black pepper and salt as needed. Top with pan-fried onions.\r\n7.\tTransfer to a serving plate. Serve hot. Share and Enjoy!\r\n',
        strThumb:
          'https://www.themealdb.com/images/media/meals/4pqimk1683207418.jpg',
        strYoutube: 'https://www.youtube.com/watch?v=xOQON5_S7as',
      },
    ],
  });
}
