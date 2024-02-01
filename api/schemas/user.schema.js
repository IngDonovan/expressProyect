const Joi = require('joi');

const id = Joi.string().uuid();
const avatar = Joi.string().uri();
const birthdate = Joi.number().integer().min(1900).max(2024);
const email = Joi.string().email();
const firstName = Joi.string().alphanum().min(3).max(30);
const lastName = Joi.string().alphanum().min(3).max(30);
const sex = Joi.string()

const createUserSchema = Joi.object({
  avatar: avatar.required(),
  birthdate: birthdate.required(),
  email: email.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
  sex: sex.required(),
});

const updateUserSchema = Joi.object({
  avatar: avatar,
  birthdate: birthdate,
  email: email,
  firstName: firstName,
  lastName: lastName,
  sex: sex,
});

const getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = { createUserSchema, updateUserSchema, getUserSchema };
