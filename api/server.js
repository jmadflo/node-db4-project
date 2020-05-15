const express = require('express')
const recipeRouter = require('./recipes/recipeRouter')
const ingredientRouter = require('./ingredients/ingredientRouter')

const server = express()
server.use(express.json())
server.use('/api/recipes', recipeRouter)
server.use('/api/ingredients', ingredientRouter)

module.exports = server