exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, firstname: 'admin', lastname: 'hynari_bike', email: 'admin@mail.com', password: '1', role: '1' },
      ]);
    });
};
