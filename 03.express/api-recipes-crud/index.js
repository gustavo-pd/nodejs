const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authMiddleware = require('./middlewares/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');
const drinksRouter = require('./drinksRouter');

app.use('/recipes', recipesRouter);
app.use('/drinks', drinksRouter);

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001')
});

