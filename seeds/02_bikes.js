exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bikes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bikes').insert([
        {
          id: 1,
          name: 'jean',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          garage_id: '2',
        },
        {
          id: 2,
          name: 'romain',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          garage_id: '2',
        },
        {
          id: 3,
          name: 'tasoeur',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          garage_id: '3',
        },
        {
          id: 4,
          name: 'tr',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          garage_id: '3',
        },
      ]);
    });
};
