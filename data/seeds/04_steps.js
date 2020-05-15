
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, directions: 'Pour the cereal in a bowl.', recipe_id: 1},
        {id: 2, step_number: 2, directions: 'Pour the milk in cereal bowl.', recipe_id: 1},
        {id: 3, step_number: 3, directions: 'Grab a spoon and enjoy!', recipe_id: 1},
        {id: 4, step_number: 1, directions: 'Drop the butter into a hot pan', recipe_id: 2},
        {id: 5, step_number: 2, directions: 'Once the butter has melted, crack eggs and drop their contents into the pan.', recipe_id: 2},
        {id: 6, step_number: 3, directions: 'Once eggs have solidified, serve them in a bowl and enjoy!', recipe_id: 2},
      ]);
    });
};
