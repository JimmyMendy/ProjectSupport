// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import dotenv from 'dotenv';
import homeRoute from './server/routes/index';
import mainRoutes from './server/routes/main';




//Set up depencies
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
require('dotenv').config();

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

// Set up route
homeRoute(app);
app.use('/api/', mainRoutes);

app.get('*', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port);

export default app;