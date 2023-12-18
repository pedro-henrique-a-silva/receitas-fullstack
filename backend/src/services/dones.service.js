const { User, Recipe, Done, Category } = require('../models') 

const getDones = async (userId) => {
  const dones = await User.findOne({
    attributes: ['id', 'name', 'username'],
    include: [
      { 
        model: Recipe, 
        through: { attributes: [] }, 
        as: 'recipesDone',
        include: { 
          model: Category, 
          as: 'category', 
          attributes: [ 'categoryName']
        },
      },
      
    ],
    where: {id: userId}
  })

  return {status: "SUCCESS", message: dones}
}

const updateDones = async (recipeId, userId) => {
  const done = await Done.findOne({
    where: {idUser: userId, idRecipe: recipeId}
  })

  if (done) {
    const favoriteRemoved = Done.destroy({
      where: {idUser: userId, idRecipe: recipeId}
    })

    return {status: "SUCCESS", message: { favorite: false }}
  }

  const favoriteCreated = Done.create({idUser: userId, idRecipe: recipeId})

  return {status: "CREATED", message: { favorite: true }}
}

module.exports = {
  getDones,
  updateDones
}