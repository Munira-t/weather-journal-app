// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes, body-parser, and cors.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

// handle cors for cross origin allowanc
app.use(cors());

// handle body parsing configuring express to use body-parser as middle-ware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// // Initialize the main project folder
app.use(express.static('website'));

//  Setup Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port: http://localhost:${port}`);
});

// Get rout
app.get('/all', (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

// Post rout
app.post('/postData', (req, res) => {
  // post data
  projectData = req.body;
  console.log(projectData);
  res.send(projectData);
});