const db = require('../../data/dbConfig')

module.exports = {
    getRecipes,
    getRecipeById,

}

// returns contents of recipes table
function getRecipes() {
    return db('recipes')
}

// returns recipe with a certain id
function getRecipeById(id) {
    return db('recipes').where({ id }).first()
}