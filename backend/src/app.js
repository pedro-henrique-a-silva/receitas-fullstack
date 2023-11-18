const express = require('express');
const {mealsRouter} = require('./routes');

const app = express();

app.use('/meals', mealsRouter)

module.exports = app;