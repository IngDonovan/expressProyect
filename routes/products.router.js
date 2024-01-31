const express = require('express');
const ProductService = require('../services/product.service');
const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products)
});

//todo lo que es especifico debe ir antes de lo dinámico para poder detectarlo
router.get('/filter', (req, res) => {
  res.send('Filter')
});


router.get('/:id', async (req, res, next) => {
  try {
    const { id }= req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);//de forma explicita
  }

});

router.post('/', async (req, res, next) => {
  const body= req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct)
});
router.patch('/:id', async (req, res) => {
  try {
    const { id }= req.params;
    const body= req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }

});
router.delete('/:id', async (req, res, next) => {
  try {
    const { id }= req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
