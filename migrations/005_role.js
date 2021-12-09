exports.up = function (knex) {
  console.log('role');
  return knex.schema.createTable('role', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('role');
};
