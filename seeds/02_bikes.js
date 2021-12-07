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
          lat: '40.61166001000052',
          lng: '1.4533399863044485',
          // user_id: '1',
          garage_id: '2',
        },
        {
          id: 2,
          name: 'romain',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          lat: '38.61166001000052',
          lng: '1.4433399863044485',
          // user_id: '1',
          garage_id: '2',
        },
        {
          id: 3,
          name: 'tasoeur',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          lat: '36.61166001000052',
          lng: '1.4333399863044485',
          // user_id: '1',
          garage_id: '3',
        },
        {
          id: 4,
          name: 'tr',
          pictureUrl: 'https://hynari.fr/img/prestashop-logo-1628701157.jpg',
          lat: '34.61166001000052',
          lng: '1.4233399863044485',
          // user_id: '1',
          garage_id: '3',
        },
      ]);
    });
};
