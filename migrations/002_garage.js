exports.up = function (knex) {
  return knex.schema.createTable('garage', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.integer('capacityMax').notNull();
    t.double('lat').notNull();
    t.double('lng').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('garage');
};
