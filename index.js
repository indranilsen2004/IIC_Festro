const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const Database = require("better-sqlite3");

const app = express();
const PORT = process.env.PORT || 8080;

// connect SQLite
const db = new Database("database.db");

// create table
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    mobile TEXT,
    email TEXT,
    idcard TEXT,
    bday TEXT,
    passes INTEGER,
    vip TEXT,
    newsletter INTEGER
  )
`
).run();

app
  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json());

app.post("/api/user", (req, res) => {
  const {
    first_name,
    last_name,
    mobile,
    email,
    idcard,
    bday,
    passes,
    vip,
    newsletter,
  } = req.body;

  const stmt = db.prepare(`
    INSERT INTO orders
    (first_name, last_name, mobile, email, idcard, bday, passes, vip, newsletter)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    first_name,
    last_name,
    mobile,
    email,
    idcard,
    bday,
    passes,
    vip,
    newsletter ? 1 : 0
  );

  // return JSON instead of redirect
  res.json({ order_id: result.lastInsertRowid });
});

app.get("/receipt", (req, res) => {
  const id = req.query.id;

  const order = db.prepare("SELECT * FROM orders WHERE id = ?").get(id);

  if (!order) return res.send("Invalid order ID");

  const receipt = `
  FESTRO — ORDER RECEIPT
  ---------------------------
  Order ID : ${order.id}
  Name     : ${order.first_name} ${order.last_name}
  Mobile   : ${order.mobile}
  Email    : ${order.email}
  Passes   : ${order.passes}
  Pass Type: ${order.vip}
  DOB      : ${order.bday}
  Newsletter Alerts: ${order.newsletter ? "YES" : "NO"}
  ---------------------------
  Thank you for your booking!
  `;

  res.setHeader("Content-Disposition", "attachment; filename=receipt.txt");
  res.type("text/plain");
  res.send(receipt);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
