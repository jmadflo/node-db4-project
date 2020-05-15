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
            res.status(500).json({ message: "Recipes could not be retrieved." })
        })
})

module.exports = router
