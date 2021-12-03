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
    console.log('db ' + id);
    return knex('bikes').select('*').where({ garage_id: id });
  }
}

export const k = new KnexLib();
