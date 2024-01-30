const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();



router.get('/', (req, res) => {
  const categories = [];
  for (let i = 0; i < 10; i++) { // Puedes ajustar el número 10 según la cantidad de categorías que desees obtener
    categories.push(faker.commerce.department());
  }
  res.json({
    categories: categories
  });
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId }= req.params;
  res.json(
    {
      productId,
      title: 'Product 1',
      price: 1000,
      category:'jewelery',
      description:'lalala',
      image:'url.....',
      categoryId
    },
  )
});

module.exports = router;
