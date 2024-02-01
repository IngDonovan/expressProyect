const express = require('express');
const CategorieService = require('../services/categorie.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema } = require('../schemas/category.schema');
const router = express.Router();
const service = new CategorieService();


router.get('/', async (req, res) => {
  const categories = await service.find();
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

router.get('/:category',
  validatorHandler(createCategorySchema,'params'),
  async (req, res) => {
    const { category }= req.params;
    const products = await service.findOne(category);
    res.json(products)
  }
);

router.post('/',
  validatorHandler(createCategorySchema,'body'),
  async (req, res) => {
    const body= req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory)
  }
);

router.patch('/:category',
  validatorHandler(createCategorySchema,'params'),
  validatorHandler(updateCategorySchema,'body'),
  async (req, res) => {
    const { category }= req.params;
    const body= req.body;
    const updateCategory = await service.update(category, body);
    res.json(updateCategory);
  }
);

router.delete('/:category',
  validatorHandler(createCategorySchema,'params'),
  async (req, res) => {
    const { category }= req.params;
    const rta = await service.delete(category);
    res.json(rta);
  }
);

module.exports = router;
