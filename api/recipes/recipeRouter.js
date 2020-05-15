const express = require('express')
const Recipes = require('./recipeModel')

const router = express.Router()

// returns a list of all recipe names
router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(201).json(recipes)
        })
        .catch(() => {
            res.status(500).json({ message: 'Recipes could not be retrieved.' })
        })
})

// returns an object containing the info for a recipe of a certain id
router.get('/:id', (req, res) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {res.status(201).json(recipe)})
        .catch(() => {res.status(500).json({ message: `Recipe with an id of ${req.params.id} could not be retrieved`})})
})

// returns an array of objects with info for a shopping list to make a recipe with an id of req.params.id
router.get('/:id/shoppinglist', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(cart => {res.status(201).json(cart)})
        .catch(() => {res.status(500).json({ message: `Shopping list for recipe with an id of ${req.params.id} could not be retrieved`})})
})

// returns instructions for a recipe with an id of req.params.id
router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => {res.status(201).json(instructions)})
        .catch(() => {res.status(500).json({ message: `Instructions for recipe with an id of ${req.params.id} could not be retrieved`})})
})

module.exports = router
