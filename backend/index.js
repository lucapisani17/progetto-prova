const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3000;

// Middleware per gestire le richieste CORS
app.use(cors());

// Configura la connessione al database MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "user", // Sostituisci con il tuo utente MySQL
  password: "password",
  database: "databaseV1", // Sostituisci con il tuo nome del database
});

// Connetti al database MySQL
connection.connect((err) => {
  if (err) {
    console.error("Errore di connessione al database: " + err.stack);
    return;
  }
  console.log("Connesso al database con ID " + connection.threadId);
});

// Definisci una rotta per ottenere la lista delle bici
app.get("/api/bikes", (req, res) => {
  const query =
    "SELECT bike_type, battery_level, latitude, longitude, partner_id, reserved, count_run FROM bikes";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Errore durante l'esecuzione della query: " + error.stack);
      res.status(500).send("Errore del server");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
