
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('station')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('station').insert([
        {
          id: 1,
          capacityMax: '10',
          garage_id: '2',
        },
        {
          id: 2,
          capacityMax: '10',
          garage_id: '2',
        },
        {
          id: 3,
          capacityMax: '10',
          garage_id: '3',
        },
        {
          id: 4,
          capacityMax: '10',
          garage_id: '3',
        },
      ]);
    });
};
