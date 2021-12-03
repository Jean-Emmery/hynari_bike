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
}

export const k = new KnexLib();
