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
  getAllStationDb() {
    return knex('station').select('*');
  }
  getBikesByStationIdDb(id) {
    return knex('bikes').select('*').where({ station_id: id });
  }
  getStationByGarageIdDb(id) {
    return knex('station').select('*').where({ garage_id: id });
  }
  getGarageDb() {
    return knex('garage').select('id');
  }
  getStationDb() {
    return knex('station').select('id');
  }
  addBikeDb(bike) {
    return knex('bikes').insert({
      name: bike.name,
      pictureUrl: bike.pictureUrl,
      lat: bike.lat,
      lng: bike.lng,
      station_id: bike.station,
    });
  }
  addGarageDb(garage) {
    return knex('garage').insert({
      name: garage.name,
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
  deleteBikeDb(id) {
    return knex('bikes').where({ id: id }).del();
  }
  deleteGarageDb(id) {
    return knex('garage').where({ id: id }).del();
  }
  editStationDb(station) {
    console.log('db' + station.id);
    return knex('station').where({ id: station.id }).update(station);
  }
  deleteStationDb(id) {
    return knex('station').where({ id: id }).del();
  }
  addStationDb(station) {
    return knex('station').insert({
      capacityMax: station.capacityMax,
      garage_id: station.garage,
    });
  }
}

export const k = new KnexLib();
