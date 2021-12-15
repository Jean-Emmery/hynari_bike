exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('garage')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('garage').insert([
        {
          id: 1,
          name: 'Balma',
          lat: '43.611',
          lng: '1.498',
        },
        {
          id: 2,
          name: 'Toulouse',
          lat: '43.604652',
          lng: '1.444209',
        },
      ]);
    });
};
