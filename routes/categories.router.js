const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  // const { productId, categoryId }= req.params;
  res.json(
    [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"

    ]
  )
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
