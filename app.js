// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/main';
import dotenv from 'dotenv';

// Set up dotenv
require('dotenv').config();

//Set up depencies
const app = express();

// Set up route
app.use('/api/', mainRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect(
  process.env.MONGODB, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() =>{
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database');
  });

//Set up port number
const port = 5035;

//Set up home route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port, () => {
  console.log(`Our server is live on ${port}.`);
});