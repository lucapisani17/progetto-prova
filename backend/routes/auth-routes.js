const express = require("express");
const router = express.Router();
const knex = require("../knexfile"); // Importa la configurazione di knex

// Login route
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Ricevuta richiesta di login per l'utente:", username);

  try {
    const results = await knex("users")
      .where({ username: username, password: password })
      .select("username", "first_name", "last_name");

    if (results.length > 0) {
      console.log("Login avvenuto con successo per l'utente:", username);
      res.json({ success: true, user: results[0] });
    } else {
      console.log("Username o password non validi per l'utente:", username);
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Errore durante l'esecuzione della query:", error);
    res.status(500).send("Errore del server");
  }
});

module.exports = router;
