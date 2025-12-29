// Import required packages
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// Create Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",         // Your MySQL username
  password: "",         // Your MySQL password
  database: "mobiledb"  // Your database
});

// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error: ", err);
  } else {
    console.log("Connected to MySQL database 'mobiledb' successfully!");
  }
});

// ROUTES

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Get all records from register table
app.get("/register", (req, res) => {
  const sql = "SELECT * FROM register";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new record to register table
app.post("/register", (req, res) => {
  const { firstname, lastname, mobile_number, email, address, model, price } = req.body;
  const sql = "INSERT INTO register (firstname, lastname, mobile_number, email, address, model, price) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [firstname, lastname, mobile_number, email, address, model, price], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Registration successful!", id: result.insertId });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
