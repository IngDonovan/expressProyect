const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/',(req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  }else {
    res.send('No hay parámetros');
  }
});
router.get('/:id',(req, res) => {
  const { id } = req.params;
      res.json({
      id,
      name:'don',
      age: 30,
      role: 'full Stack',
    });
  });

module.exports = router;
