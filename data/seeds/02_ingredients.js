
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'cereal'},
        {id: 2, ingredient_name: 'milk'},
        {id: 3, ingredient_name: 'eggs'},
        {id: 4, ingredient_name: 'butter'}
      ]);
    });
};
