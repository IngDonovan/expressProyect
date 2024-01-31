const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const category = Joi.string().min(3).max(15);
const description = Joi.string().min(3);
const image = Joi.string.alphanum();
const isBlock = Joi.boolean();

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  category: category.required(),
  description: description.required(),
  image: image.required(),
  isBlock: isBlock.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  price: price,
  category: category,
  description: description,
  image: image,
  isBlock: isBlock,
});

const getProductSchema = Joi.object({
  id: id.required(),
});


module.exports = { createProductSchema, updateProductSchema, getProductSchema };
