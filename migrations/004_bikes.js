exports.up = function (knex) {
  return knex.schema.createTable('bikes', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.string('pictureUrl').notNull();
    t.integer('station_id').unsigned();
    t.double('lat').notNull();
    t.double('lng').notNull();
    t.integer('user_id').unsigned();
    // t.foreign('user_id')
    //   .references('users.id')
    //   .onUpdate('cascade')
    //   .onDelete('cascade');
    t.foreign('station_id')
      .references('station.id')
      .onUpdate('cascade')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bikes');
};