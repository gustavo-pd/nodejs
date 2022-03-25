const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Mundo');
});

app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));
