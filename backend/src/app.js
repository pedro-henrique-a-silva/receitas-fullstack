const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/meals', routes.mealsRouter);
app.use('/drinks', routes.drinksRouter);

module.exports = app;