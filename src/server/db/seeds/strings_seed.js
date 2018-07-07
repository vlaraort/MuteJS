
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('strings').del()
    .then(function () {
      // Inserts seed entries
      return knex('strings').insert([
        {key: "strings.movemoney.popup.ok", string: 'string es en', country_cod: "es", region_cod: "en"},
        {key: "strings.movemoney.popup.cancel", string: 'string es es', country_cod: "es", region_cod: "es"},
        {key: "strings.movemoney.save", string: 'string es en', country_cod: "cz", region_cod: "en"},
        {key: "strings.movemoney.save.save", string: 'string es en', country_cod: "es", region_cod: "cz"},
        {key: "strings.movemoney.graph", string: 'string es en', country_cod: "es", region_cod: "en"},
      ]);
    });
};
