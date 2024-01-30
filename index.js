const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('My Server in ExpressJS')
});
app.get('/new', (req, res) => {
  res.send('new Routes')
});
app.get('/home', (req, res) => {
  res.send('Home Page')
});

routerApi(app);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
});
