exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('garage')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('garage').insert([
        { id: 1, name: 'mort', lat: '1', lng: '1' },
        {
          id: 2,
          name: 'Garage Balma',
          lat: '43.61166001000052',
          lng: '1.4933399863044485',
        },
        {
          id: 3,
          name: 'Garage Toulouse',
          lat: '43.6105987586592',
          lng: '1.4303827828545141',
        },
      ]);
    });
};
