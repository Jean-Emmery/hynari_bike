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
    return knex('bikes').update(bike);
  }
  getBikeByIdDb(id) {
    return knex('bikes').select('*').where({ id: id });
  }

  findUser(username: string) {
    console.log("knexlib:findUser:username")
    console.log(username)
    return knex('users')
    .select('email', 'firstname', 'lastname', 'password', 'role')
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
    });
  }
}

export const k = new KnexLib();
