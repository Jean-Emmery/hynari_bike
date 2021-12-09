exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('role')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        { id: 1, name: 'admin' },
        { id: 2, name: 'moderator' },
        { id: 3, name: 'user' },
      ]);
    });
};
