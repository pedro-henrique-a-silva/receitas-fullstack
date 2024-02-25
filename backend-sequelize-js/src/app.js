const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/meals', routes.mealsRouter);
app.use('/drinks', routes.drinksRouter);
app.use('/user', routes.userRouter);
app.use('/favorites', routes.favoritesRouter);
app.use('/done', routes.doneRouter);

app.get('/healthy', (req, res) => {
  res.status(200).send('estou vivo')
})

module.exports = app;