exports.up = function (knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').unsigned().primary();
    t.string('firstname').notNull();
    t.string('lastname').notNull();
    t.string('email').notNull();
    t.string('password').notNull();
    t.string('role').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
