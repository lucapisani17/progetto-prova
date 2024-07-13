const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "user", // Sostituisci con il tuo utente MySQL
    password: "password", // Sostituisci con la tua password MySQL
    database: "databaseV1", // Sostituisci con il tuo nome del database
  },
});

knex
  .raw("SELECT 1")
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

module.exports = knex;
