const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

mongoose.connect('mongodb://msimic:pus1kitu@ds115523.mlab.com:15523/userbase', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database...');
});

app.use('/api', routes);

app.listen(4000, () => {
  console.log('Server has started...');
});
