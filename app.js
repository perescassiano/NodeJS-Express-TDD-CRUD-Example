const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo.routes");
const databaseConnection = require('./database/mongodb.connect');

databaseConnection.connect();

app.use(express.json());

app.use("/todos", todoRoutes)

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
  });

app.get("/", (req, res) => {
    res.json("Hello world!");
});

module.exports = app;