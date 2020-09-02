//Call in installed dependencies
const express = require('express');

//Set up express app
const app = express();

//Set up port number
const port = 5035;

//Set up home route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port, (req, res) => {
  console.log(`Our server is live on ${port}.`);
});