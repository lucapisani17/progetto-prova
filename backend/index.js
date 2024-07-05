const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware per gestire le richieste CORS
app.use(cors());

// Dummy data
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 20,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for product 3",
    price: 30,
  },
];

// Endpoint per ottenere la lista dei prodotti
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
