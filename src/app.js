// src/app.js
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const bodyParser = require('body-parser');
require('dotenv').config(); //handling environment variables


// Built-in middleware to parse JSON request bodies
app.use(express.json());

// Built-in middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// My Routes
app.use("/api/v1/products", productRoutes);

module.exports = app;
