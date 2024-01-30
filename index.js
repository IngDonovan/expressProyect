const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My Server in ExpressJS')
});
app.get('/new', (req, res) => {
  res.send('new Routes')
});
app.get('/products', (req, res) => {
  res.json([
    {
      id:1,
      title: 'Product 1',
      price: 1000,
      category:'jewelery',
      description:'lalala',
      image:'url.....'
    },
    {
      id:2,
      title: 'Product 2',
      price: 2000,
      category:'electronics',
      description:'lalala',
      image:'url.....'
    },
    {
      id:3,
      title: 'Product 3',
      price: 5000,
      category:"men's clothing",
      description:'lalala',
      image:'url.....'
    },
  ])
});
app.get('/products/:id', (req, res) => {
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

app.get('/products/categories/', (req, res) => {
  // const { productId, categoryId }= req.params;
  res.json(
    [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"

    ]
  )
});

app.get('/users',(req, res) => {
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

app.get('/products/:productId/categories/:categoryId', (req, res) => {
  const { productId, categoryId }= req.params;
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

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
});
