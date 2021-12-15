exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, firstname: 'admin', lastname: 'hynari_bike', email: 'admin@mail.com', password: 'admin', role: '3' },
        { id: 1, firstname: 'gestionnaire', lastname: 'hynari_bike', email: 'gestionnaire@mail.com', password: 'gestionnaire', role: '2' },
        { id: 1, firstname: 'user', lastname: 'hynari_bike', email: 'user@mail.com', password: 'user', role: '1' },
      ]);
    });
};
