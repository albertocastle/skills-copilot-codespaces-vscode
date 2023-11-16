// Create web server
// Handle requests to /comments
// Return comments data from database

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create web server
const app = express();

// Use body-parser to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle requests to /comments
app.get('/comments', (req, res) => {
  // Read comments from database
  fs.readFile('comments.json', (err, data) => {
    // Return comments data
    res.json(JSON.parse(data));
  });
});

// Start web server
app.listen(3000, () => {
  console.log('Web server started on port 3000');
});

