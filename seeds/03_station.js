
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('station')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('station').insert([
        {
          id: 1,
          name: 'Métro Arenes',
          capacityMax: '10',
          lat: '43.593842',
          lng: '1.417388',
          garage_id: '1',
        },
        {
          id: 2,
          name: 'Métro Mirail',
          lat: '43.579445',
          lng: '1.403195',
          capacityMax: '10',
          garage_id: '1',
        },
        {
          id: 3,
          name: "Métro pate d'oie",
          lat: '43.596927',
          lng: '1.423121',
          capacityMax: '10',
          garage_id: '2',
        },
        {
          id: 4,
          name: 'GARAGE TOULOUSE : STATION 4',
          lat: '43.3601',
          lng: '1.2640',
          capacityMax: '10',
          garage_id: '2',
        },
      ]);
    });
};
