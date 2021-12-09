module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'hynari_bike',
      user: 'root',
      password: 'root',
      port: 3306,
      charset: 'utf8',
    },
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
