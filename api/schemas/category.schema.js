const Joi = require('joi');

const category = Joi.string().min(3).max(15);

const createCategorySchema = Joi.object({
  category: category.required(),
});

const updateCategorySchema = Joi.object({
  category: category,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});


module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema };
