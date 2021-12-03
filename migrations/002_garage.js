exports.up = function (knex) {
  return knex.schema.createTable('garage', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.integer('capacityMax').notNull();
    t.float('lat').notNull();
    t.float('lng').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('garage');
};
