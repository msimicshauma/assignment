const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');

var app = express();
mongoose.connect('mongodb://localhost/userBase', { useNewUrlParser: true });

//app.use(express.static('public'));
app.use('/api', routes);

app.listen(4000, () => {
  console.log('Server has started...');
});
