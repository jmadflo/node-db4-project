const db = require('../../data/dbConfig')

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions
}

// returns contents of recipes table
function getRecipes() {
    return db('recipes')
}

// returns recipe with a certain id
function getRecipeById(id) {
    return db('recipes')
        .where({ id }).first()
}

// returns a shopping list for a recipe with an id of recipe_id
function getShoppingList(recipe_id) {
    return db.select('ingredients.ingredient_name', 'recipe_ingredients.unit_of_measurement', 'recipe_ingredients.quantity')
        .from('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .where('recipe_ingredients.recipe_id', recipe_id)
}

// gets instructions for recipe with an id of recipe_id
function getInstructions(recipe_id) {
    return db.select('step_number', 'directions').from('steps')
        .where({recipe_id})
}