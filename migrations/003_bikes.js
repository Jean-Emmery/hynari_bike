exports.up = function (knex) {
  return knex.schema.createTable('bikes', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.string('pictureUrl').notNull();
    t.integer('garage_id').unsigned();
    t.foreign('garage_id')
      .references('garage.id')
      .onUpdate('cascade')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bikes');
};
