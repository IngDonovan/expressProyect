const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const app = express();
const port = 3000;

const { logErrors,  errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors(options));//habilita a cualquier dominio

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
// app.use(cors(options));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
});
