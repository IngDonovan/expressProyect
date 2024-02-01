const express = require('express');
const UserService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema');
const router = express.Router();
const service = new UserService();

// router.get('/',(req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   }else {
//     res.send('No hay parámetros');
//   }
// });
  router.get('/', async (req, res) => {
    const users = await service.find();
    res.json(users)
  });

  router.get('/:id',
  validatorHandler(getUserSchema,'params'),
  async (req, res) => {
      const { id }= req.params;
      const user = await service.findOne(id);
      res.json(user)
    }
  );

  router.post('/',
  validatorHandler(createUserSchema,'body'),
  async (req, res) => {
      const body= req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser)
    }
  );
  router.patch('/:id',
  validatorHandler(getUserSchema,'params'),
  validatorHandler(updateUserSchema,'body'),
  async (req, res) => {
    const { id }= req.params;
    const body= req.body;
    const user = await service.update(id, body);
    res.json(user);
    }
  );

  router.delete('/:id',
  validatorHandler(getUserSchema,'params'),
  async (req, res) => {
    const { id }= req.params;
    const rta = await service.delete(id);
    res.json(rta);
    }
  );
module.exports = router;
