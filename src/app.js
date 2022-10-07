const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

module.exports = app;