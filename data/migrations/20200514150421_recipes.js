
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', recipes => {
            recipes.increments()
            recipes.text('recipe_name', 128)
                .notNullable()
        })
        .createTable('ingredients', ingredients => {
            ingredients.increments()
            ingredients.text('ingredient_name', 50)
                .notNullable()
        })
        // recipes and ingredients have a many to many relationship, so we need an extra table to act as the connecting tissue between the id values from the two table that go together
        .createTable('recipe_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
            tbl.text('unit_of_measurement', 30)
                .notNullable()
            tbl.float('quantity')
                .unsigned()
                .notNullable()
            tbl.primary(['recipe_id', 'ingredient_id'])
        })
        // relationship between recipes and steps in one to many
        .createTable('steps', steps => {
            steps.increments()
            steps.integer('step_number')
                .unsigned()
                .notNullable()
            steps.text('directions')
                .notNullable()
            steps.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE') // If I went to production I would probaby RESTRICT instead of CASCADE to prevent a step from a recipe possibly getting its reference to its recipe lost.
        })
}

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe-ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
}
