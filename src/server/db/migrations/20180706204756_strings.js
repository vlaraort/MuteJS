exports.up = (knex, Promise) => {
    return knex.schema.createTable('strings', (table) => {
      table.increments();
      table.string('key').notNullable().unique();
      table.string('string').notNullable();
      table.string('country_cod').notNullable();
      table.string('region_cod').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('strings');
  };