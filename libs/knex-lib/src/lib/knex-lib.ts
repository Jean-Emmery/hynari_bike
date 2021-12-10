const options = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
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
  async getUserByBikeIdDb(bikeId) {
    await knex('bikes')
    .where({id: bikeId})
    .then((row) => {
      console.log("user_id: " + row[0].user_id)
      return (row[0].user_id);
    })
  }
  async dropBikeDb(bikeId) {
    console.log("knex-lib:dropBikeDb")
    console.log('bikeId: ' + bikeId)
    const userId = this.getUserByBikeIdDb(bikeId)
    console.log('userId: ' + userId)
    await knex('bikes')
    .where({ id: bikeId })
    .update({ user_id: '0' })
    // pour l'instant userId est une promise, await devant le this.etc marche pas
    //return this.getBikesByUserIdDb(userId)
  }
  // getBikesByStationIdDb(id) {
  //   return knex('bikes').select('*').where({ station_id: id });
  // }
  getBikesUpByStationIdDb(id) {
    return knex('bikes')
    .select('*')
    .where({ station_id: id, user_id: '0' });
  }
  getBikesByUserIdDb(id) {
    console.log("knex-lib:getBikesByUserIdDb:id=" + id)
    return knex('bikes').select('*').where({ user_id: id });
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
      user_id: bike.user_id,
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
  pickUpBikeDb(bike) {
    console.log('db' + bike.id);
    console.log('bike')
    console.log(bike)
    return knex('bikes').where({ id: bike.id }).update({
      id: bike.id,
      user_id: bike.user_id,
      station_id: bike.station_id,
    });
  }

  findUser(username: string) {
    console.log("knexlib:findUser:username")
    console.log(username)
    return knex('users')
    .select('email', 'firstname', 'lastname', 'password', 'role', 'id')
    .where({
      email: username,
    })
    .then((el) => {
      console.log("el")
      console.log(el[0])
      return (el[0]);
    })
    .catch((err) => console.log(err))
    return null
  }

  findAll() {
    return knex('users');
  }

  registerUser(user: any) {
    return knex('users').insert({
      email: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      password: user.password,
      role: '1'
    })
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
      name: station.name,
      garage_id: station.garage,
    });
  }
}

export const k = new KnexLib();
