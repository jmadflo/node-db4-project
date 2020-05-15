const db = require('../../data/dbConfig')

module.exports = {
    getRecipeForIngredient
}

// Stretch: returns a list of recipes that use the ingredient with an id provided as an arguement.
function getRecipeForIngredient(ingredient_id) {
    return db.select('recipes.recipe_name').from('recipes')
        .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipe_id')
        .where('recipe_ingredients.ingredient_id', ingredient_id)
}