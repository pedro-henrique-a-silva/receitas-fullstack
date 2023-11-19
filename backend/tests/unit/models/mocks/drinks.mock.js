const allDrinksMockFromDB = [
  {
    "id_drink": 12450,
    "str_drink": "Victor",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/voapgc1492976416.jpg",
    "str_ingredient1": "Gin",
    "str_ingredient2": "Sweet Vermouth",
    "str_ingredient3": "Brandy",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 1/2 oz ",
    "str_measure2": "1/2 oz ",
    "str_measure3": "1/2 oz ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 12764,
    "str_drink": "Karsk",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Highball glass",
    "str_instructions": "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
    "str_ingredient1": "Coffee",
    "str_ingredient2": "Grain alcohol",
    "str_ingredient3": null,
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 part ",
    "str_measure2": "2 parts ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 12776,
    "str_drink": "Melya",
    "id_category": 7,
    "str_alcoholic": "Non alcoholic",
    "str_glass": "Coffee mug",
    "str_instructions": "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
    "str_ingredient1": "Espresso",
    "str_ingredient2": "Honey",
    "str_ingredient3": "Cocoa powder",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": null,
    "str_measure2": "Unsweetened ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 13128,
    "str_drink": "Diesel",
    "id_category": 10,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Pint glass",
    "str_instructions": "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/sxrrqq1454512852.jpg",
    "str_ingredient1": "Lager",
    "str_ingredient2": "Cider",
    "str_ingredient3": "Blackcurrant cordial",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/2 pint ",
    "str_measure2": "1/2 pint ",
    "str_measure3": "1 dash ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 13332,
    "str_drink": "B-53",
    "id_category": 6,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Collins Glass",
    "str_instructions": "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
    "str_ingredient1": "Kahlua",
    "str_ingredient2": "Sambuca",
    "str_ingredient3": "Grand Marnier",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/3 shot ",
    "str_measure2": "1/3 shot ",
    "str_measure3": "1/3 shot ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 13501,
    "str_drink": "ABC",
    "id_category": 6,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Shot glass",
    "str_instructions": "Layered in a shot glass.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    "str_ingredient1": "Amaretto",
    "str_ingredient2": "Baileys irish cream",
    "str_ingredient3": "Cognac",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/3 ",
    "str_measure2": "1/3 ",
    "str_measure3": "1/3 ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 13938,
    "str_drink": "AT&T",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Highball Glass",
    "str_instructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
    "str_ingredient1": "Absolut Vodka",
    "str_ingredient2": "Gin",
    "str_ingredient3": "Tonic water",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 oz ",
    "str_measure2": "1 oz ",
    "str_measure3": "4 oz ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 14229,
    "str_drink": "747",
    "id_category": 6,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Shot glass",
    "str_instructions": "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    "str_ingredient1": "Kahlua",
    "str_ingredient2": "Baileys irish cream",
    "str_ingredient3": "Frangelico",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/3 part ",
    "str_measure2": "1/3 part ",
    "str_measure3": "1/3 part ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 14598,
    "str_drink": "50/50",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Collins Glass",
    "str_instructions": "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
    "str_ingredient1": "Vanilla vodka",
    "str_ingredient2": "Grand Marnier",
    "str_ingredient3": "Orange juice",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "2 1/2 oz ",
    "str_measure2": "1 splash ",
    "str_measure3": "Fill with ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 14610,
    "str_drink": "ACID",
    "id_category": 6,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Shot glass",
    "str_instructions": "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
    "str_ingredient1": "151 proof rum",
    "str_ingredient2": "Wild Turkey",
    "str_ingredient3": null,
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 oz Bacardi ",
    "str_measure2": "1 oz ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 15288,
    "str_drink": "252",
    "id_category": 6,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Shot glass",
    "str_instructions": "Add both ingredients to shot glass, shoot, and get drunk quick",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    "str_ingredient1": "151 proof rum",
    "str_ingredient2": "Wild Turkey",
    "str_ingredient3": null,
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/2 shot Bacardi ",
    "str_measure2": "1/2 shot ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 15328,
    "str_drink": "Zorro",
    "id_category": 7,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Coffee Mug",
    "str_instructions": "add all and pour black coffee and add whipped cream on top.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
    "str_ingredient1": "Sambuca",
    "str_ingredient2": "Baileys irish cream",
    "str_ingredient3": "White Creme de Menthe",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "2 cl ",
    "str_measure2": "2 cl ",
    "str_measure3": "2 cl ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 15853,
    "str_drink": "B-52",
    "id_category": 6,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Shot glass",
    "str_instructions": "Layer ingredients into a shot glass. Serve with a stirrer.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
    "str_ingredient1": "Baileys irish cream",
    "str_ingredient2": "Grand Marnier",
    "str_ingredient3": "Kahlua",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/3 ",
    "str_measure2": "1/3 ",
    "str_measure3": "1/4 ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 15997,
    "str_drink": "GG",
    "id_category": 1,
    "str_alcoholic": "Optional alcohol",
    "str_glass": "Collins Glass",
    "str_instructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
    "str_ingredient1": "Galliano",
    "str_ingredient2": "Ginger ale",
    "str_ingredient3": "Ice",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "2 1/2 shots ",
    "str_measure2": null,
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 16262,
    "str_drink": "H.D.",
    "id_category": 7,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Beer mug",
    "str_instructions": "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
    "str_ingredient1": "Whisky",
    "str_ingredient2": "Baileys irish cream",
    "str_ingredient3": "Coffee",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "4 cl ",
    "str_measure2": "8 cl ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17141,
    "str_drink": "Smut",
    "id_category": 9,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Beer mug",
    "str_instructions": "Throw it all together and serve real cold.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
    "str_ingredient1": "Red wine",
    "str_ingredient2": "Peach schnapps",
    "str_ingredient3": "Pepsi Cola",
    "str_ingredient4": "Orange juice",
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/3 part ",
    "str_measure2": "1 shot ",
    "str_measure3": "1/3 part ",
    "str_measure4": "1/3 part ",
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17187,
    "str_drink": "Derby",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
    "str_ingredient1": "gin",
    "str_ingredient2": "Peach Bitters",
    "str_ingredient3": "Mint",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "6 cl",
    "str_measure2": "2 dashes",
    "str_measure3": "2 Fresh leaves",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17203,
    "str_drink": "Kir",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Wine Glass",
    "str_instructions": "Add the crÃ¨me de cassis to the bottom of the glass, then top up with wine.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
    "str_ingredient1": "Creme de Cassis",
    "str_ingredient2": "Champagne",
    "str_ingredient3": null,
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 part ",
    "str_measure2": "5 parts ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17208,
    "str_drink": "Rose",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
    "str_ingredient1": "Dry Vermouth",
    "str_ingredient2": "Gin",
    "str_ingredient3": "Apricot brandy",
    "str_ingredient4": "Lemon juice",
    "str_ingredient5": "Grenadine",
    "str_ingredient6": "Powdered sugar",
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1/2 oz ",
    "str_measure2": "1 oz ",
    "str_measure3": "1/2 oz ",
    "str_measure4": "1/2 tsp ",
    "str_measure5": "1 tsp ",
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17222,
    "str_drink": "A1",
    "id_category": 2,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    "str_ingredient1": "Gin",
    "str_ingredient2": "Grand Marnier",
    "str_ingredient3": "Lemon Juice",
    "str_ingredient4": "Grenadine",
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 3/4 shot ",
    "str_measure2": "1 Shot ",
    "str_measure3": "1/4 Shot",
    "str_measure4": "1/8 Shot",
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17225,
    "str_drink": "Ace",
    "id_category": 2,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Martini Glass",
    "str_instructions": "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    "str_ingredient1": "Gin",
    "str_ingredient2": "Grenadine",
    "str_ingredient3": "Heavy cream",
    "str_ingredient4": "Milk",
    "str_ingredient5": "Egg White",
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "2 shots ",
    "str_measure2": "1/2 shot ",
    "str_measure3": "1/2 shot ",
    "str_measure4": "1/2 shot",
    "str_measure5": "1/2 Fresh",
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17253,
    "str_drink": "Paloma",
    "id_category": 2,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Collins glass",
    "str_instructions": "Stir together and serve over ice.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
    "str_ingredient1": "Grape Soda",
    "str_ingredient2": "Tequila",
    "str_ingredient3": null,
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "3 oz",
    "str_measure2": "1 1/2 oz",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17254,
    "str_drink": "Bijou",
    "id_category": 2,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "Stir in mixing glass with ice and strain\r\n",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg",
    "str_ingredient1": "Orange Bitters",
    "str_ingredient2": "Green Chartreuse",
    "str_ingredient3": "Gin",
    "str_ingredient4": "Sweet Vermouth",
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 dash",
    "str_measure2": "1 oz",
    "str_measure3": "1 oz",
    "str_measure4": "1 oz",
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17833,
    "str_drink": "A. J.",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
    "str_ingredient1": "Applejack",
    "str_ingredient2": "Grapefruit juice",
    "str_ingredient3": null,
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "1 1/2 oz ",
    "str_measure2": "1 oz ",
    "str_measure3": null,
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  },
  {
    "id_drink": 17837,
    "str_drink": "Adam",
    "id_category": 1,
    "str_alcoholic": "Alcoholic",
    "str_glass": "Cocktail glass",
    "str_instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "str_drink_thumb": "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
    "str_ingredient1": "Dark rum",
    "str_ingredient2": "Lemon juice",
    "str_ingredient3": "Grenadine",
    "str_ingredient4": null,
    "str_ingredient5": null,
    "str_ingredient6": null,
    "str_ingredient7": null,
    "str_ingredient8": null,
    "str_ingredient9": null,
    "str_ingredient10": null,
    "str_ingredient11": null,
    "str_ingredient12": null,
    "str_ingredient13": null,
    "str_ingredient14": null,
    "str_ingredient15": null,
    "str_measure1": "2 oz ",
    "str_measure2": "1 oz ",
    "str_measure3": "1 tsp ",
    "str_measure4": null,
    "str_measure5": null,
    "str_measure6": null,
    "str_measure7": null,
    "str_measure8": null,
    "str_measure9": null,
    "str_measure10": null,
    "str_measure11": null,
    "str_measure12": null,
    "str_measure13": null,
    "str_measure14": null,
    "str_measure15": null
  }
]

const allDrinksCategoriesMockFromDB = [
  {
    "id": 1,
    "category_name": "Ordinary Drink"
  },
  {
    "id": 2,
    "category_name": "Cocktail"
  },
  {
    "id": 3,
    "category_name": "Shake"
  },
  {
    "id": 4,
    "category_name": "Other / Unknown"
  },
  {
    "id": 5,
    "category_name": "Cocoa"
  },
  {
    "id": 6,
    "category_name": "Shot"
  },
  {
    "id": 7,
    "category_name": "Coffee / Tea"
  },
  {
    "id": 8,
    "category_name": "Homemade Liqueur"
  },
  {
    "id": 9,
    "category_name": "Punch / Party Drink"
  },
  {
    "id": 10,
    "category_name": "Beer"
  },
  {
    "id": 11,
    "category_name": "Soft Drink"
  }
]

module.exports = {
  allDrinksMockFromDB,
  allDrinksCategoriesMockFromDB,
}