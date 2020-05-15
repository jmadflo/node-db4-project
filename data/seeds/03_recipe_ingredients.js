
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, unit_of_measurement: 'cup', quantity: 1},
        {recipe_id: 1, ingredient_id: 2, unit_of_measurement: 'cup', quantity: 1.5},
        {recipe_id: 2, ingredient_id: 3, unit_of_measurement: 'large', quantity: 3},
        {recipe_id: 2, ingredient_id: 4, unit_of_measurement: 'tablespoon', quantity: 1}
      ]);
    });
};
