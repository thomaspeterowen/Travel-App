// Setup empty JS object to act as endpoint for all routes
projectData = {};

// require dot-env, fetch, path, body-parser modules
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const path = require("path");
const bodyParser = require('body-parser');

// require express, mock-api modules
const express = require("express");

dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

// Start up an instance of app
const app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// GET route
app.get("/all", (req, res) => {
  res.send(projectData);
});

// POST an entry route
app.post("/addEntry", addEntry);

function addEntry(req, res) {
  //projectData.push(req.body);
  projectData = req.body;
}

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
