const express = require('express');

const CategorieService = require('../services/categorie.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema } = require('../schemas/category.schema');

const router = express.Router();
const service = new CategorieService();


router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }

});

// router.get('/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId }= req.params;
//   res.json(
//     {
//       productId,
//       title: 'Product 1',
//       price: 1000,
//       category:'jewelery',
//       description:'lalala',
//       image:'url.....',
//       categoryId
//     },
//   )
// });

router.get('/:category',
  validatorHandler(createCategorySchema,'params'),
  async (req, res, next) => {
    try {
      const { category }= req.params;
      const products = await service.findOne(category);
      res.json(products)
    } catch (error) {
      next(error);
    }

  }
);

router.post('/',
  validatorHandler(createCategorySchema,'body'),
  async (req, res, next) => {
    try {
      const body= req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory)
    } catch (error) {
      next(error);
    }

  }
);

router.patch('/:category',
  validatorHandler(createCategorySchema,'params'),
  validatorHandler(updateCategorySchema,'body'),
  async (req, res, next) => {
    try {
      const { category }= req.params;
      const body= req.body;
      const updateCategory = await service.update(category, body);
      res.json(updateCategory);
    } catch (error) {
      next(error);
    }

  }
);

router.delete('/:category',
  validatorHandler(createCategorySchema,'params'),
  async (req, res, next) => {
    try {
      const { category }= req.params;
      const rta = await service.delete(category);
      res.json(rta);
    } catch (error) {
      next(error);
    }

  }
);

module.exports = router;
