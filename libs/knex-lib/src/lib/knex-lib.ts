const options = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hynari_bike',
  },
};

const knex = require('knex')(options);

class KnexLib {
  getAllGarageDb() {
    return knex('garage').select('*');
  }
  getAllBikesDb() {
    return knex('bikes').select('*');
  }
  getBikesByGarageIdDb(id) {
    return knex('bikes').select('*').where({ garage_id: id });
  }
  getGarageDb() {
    return knex('garage').select('id', 'name');
  }
  addBikeDb(bike) {
    return knex('bikes').insert({
      name: bike.name,
      garage_id: bike.garage,
      pictureUrl: bike.pictureUrl,
    });
  }
  addGarageDb(garage) {
    return knex('garage').insert({
      name: garage.name,
      capacityMax: garage.capacityMax,
      lat: garage.lat,
      lng: garage.lng,
    });
  }
  editBikeDb(bike) {
    console.log('db' + bike.id);
    return knex('bikes').where({ id: bike.id }).update(bike);
  }
  getBikeByIdDb(id) {
    return knex('bikes').select('*').where({ id: id });
  }
}

export const k = new KnexLib();
