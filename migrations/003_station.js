exports.up = function (knex) {
  return knex.schema.createTable('station', (t) => {
    t.increments('id').unsigned().primary();
    t.integer('capacityMax').notNull();
    t.integer('garage_id').unsigned();
    t.foreign('garage_id')
      .references('garage.id')
      .onUpdate('cascade')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('station');
};
