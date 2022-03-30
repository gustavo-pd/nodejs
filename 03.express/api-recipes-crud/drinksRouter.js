const express = require('express');
const router = express.Router();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

const ordenedDrinks = drinks.sort((a, b) => {
  if(a.name < b.name) {
    return -1
  }
  if(a.name > b.name) {
    return 1
  }
  return 0;
});

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || price < 0 || Number.isNaN(price)) return res.status(400).json({ message: 'Invalid data!'});

  next();
};

router.get('/', function (_req, res) {
  res.json(ordenedDrinks);
});

router.post('/', validateName, validatePrice, function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!'});
});

router.get('/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
})

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

router.put('/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinksIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinksIndex] = { ...drinks[drinksIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const drinksIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks.splice(drinksIndex, 1);

  res.status(204).end();
});

router.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

module.exports = router;