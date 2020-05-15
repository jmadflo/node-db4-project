const express = require('express')
const Ingredient = require('./ingredientModel')

const router = express.Router()

// Stretch: returns a list of recipes that use an ingredient with an id of req.params.id
router.get('/:id/recipes', (req, res) => {
    Ingredient.getRecipeForIngredient(req.params.id)
        .then(recipes => {res.status(201).json(recipes)})
        .catch(() => {res.status(500).json({ message: `Recipes that are made using ingredient of id ${req.params.id} could not be retrieved.` })})
})

module.exports = router