
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Bowl of Cereal'},
        {id: 2, recipe_name: 'Scrambled Eggs'}
      ]);
    });
};
