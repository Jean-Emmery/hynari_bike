exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bikes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bikes').insert([
        {
          id: 1,
          name: 'VELO 1',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '40.61166001000052',
          lng: '1.4533399863044485',
          // user_id: '1',
          station_id: '1',
        },
        {
          id: 2,
          name: 'VELO 2',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '38.61166001000052',
          lng: '1.4433399863044485',
          // user_id: '1',
          station_id: '1',
        },
        {
          id: 3,
          name: 'VELO 3',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '36.61166001000052',
          lng: '1.4333399863044485',
          // user_id: '1',
          station_id: '2',
        },
        {
          id: 4,
          name: 'VELO 4',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '34.61166001000052',
          lng: '1.4233399863044485',
          // user_id: '1',
          station_id: '2',
        },
        {
          id: 5,
          name: 'VELO 5',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '34.61166001000052',
          lng: '1.4233399863044485',
          // user_id: '1',
          station_id: '3',
        },
        {
          id: 6,
          name: 'VELO 6',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '34.61166001000052',
          lng: '1.4233399863044485',
          // user_id: '1',
          station_id: '3',
        },
        {
          id: 7,
          name: 'VELO 7',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '34.61166001000052',
          lng: '1.4233399863044485',
          // user_id: '1',
          station_id: '4',
        },
        {
          id: 8,
          name: 'VELO 8',
          pictureUrl:
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          lat: '34.61166001000052',
          lng: '1.4233399863044485',
          // user_id: '1',
          station_id: '4',
        },
      ]);
    });
};
