const express = require('express');

const app = express();

const port = 3000;

const author = require('./models/Author');

app.get('/authors', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Example app listening on PORT ${port}`))