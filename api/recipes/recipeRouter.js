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

module.exports = router
