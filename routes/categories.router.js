const express = require('express');
const CategorieService = require('../services/categorie.service');
const router = express.Router();
const service = new CategorieService();


router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
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

router.get('/:category', (req, res) => {
  const { category }= req.params;
  const products = service.findOne(category);
  res.json(products)
});

router.post('/', (req, res) => {
  const body= req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory)
});

router.patch('/:category', (req, res) => {
  const { category }= req.params;
  const body= req.body;
  const updateCategory = service.update(category, body);
  res.json(updateCategory);
});

router.delete('/:category', (req, res) => {
  const { category }= req.params;
  const rta = service.delete(category);
  res.json(rta);
});

module.exports = router;
