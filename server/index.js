const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://msimic:pus1kitu@ds115523.mlab.com:15523/userbase', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database...');
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('Server has started...');
});
