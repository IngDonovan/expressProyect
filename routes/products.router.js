const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const products = [];
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
    });

  }
  res.json(products)
});

//todo lo que es especifico debe ir antes de lo dinámico para poder detectarlo
router.get('/filter', (req, res) => {
  res.send('Filter')
});


router.get('/:id', (req, res) => {
  const { id }= req.params;
  res.json(
    {
      id,
      title: 'Product 1',
      price: 1000,
      category:'jewlery',
      description:'lalala',
      image:'url.....'
    },
  )
});

router.post('/', (req, res) => {
  const body= req.body;
  res.json(
    {
      message: 'created',
      data: body,
    },
  )
});

module.exports = router;
