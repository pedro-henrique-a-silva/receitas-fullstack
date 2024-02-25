const { expect } = require('chai');
const sinon = require('sinon');
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const recipeModelProperties = [
  "id", "strName", "idCategory", "recipeType",
  "strAlcoholic", "strGlass", "strArea", "strInstructions",
  "strThumb", "strTags", "strYoutube", "strIngredient1",
  "strIngredient2", "strIngredient3", "strIngredient4",
  "strIngredient5", "strIngredient6", "strIngredient7",
  "strIngredient8", "strIngredient9", "strIngredient10",
  "strIngredient11", "strIngredient12", "strIngredient13",
  "strIngredient14", "strIngredient15", "strIngredient16",
  "strIngredient17", "strIngredient18", "strIngredient19",
  "strIngredient20", "strMeasure1", "strMeasure2",
  "strMeasure3", "strMeasure4", "strMeasure5",
  "strMeasure6", "strMeasure7", "strMeasure8",
  "strMeasure9", "strMeasure10", "strMeasure11",
  "strMeasure12", "strMeasure13", "strMeasure14",
  "strMeasure15", "strMeasure16", "strMeasure17",
  "strMeasure18", "strMeasure19", "strMeasure20",
]

const RecipesModel= require('../../../src/models/recipes.model')

describe('Testando recipes - MODEL', () => {
  it('Verificando nome da tabela', function() {
    const Model = RecipesModel(sequelize, dataTypes)
    const instance = new Model()

    checkModelName(Model)('Recipe')

    context('propriedades', () => {
      ;recipeModelProperties.forEach(checkPropertyExists(instance))
    })
  })
})