const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/meals', routes.mealsRouter);
app.use('/drinks', routes.drinksRouter);

module.exports = app;