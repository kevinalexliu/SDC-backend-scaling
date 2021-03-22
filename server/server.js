const express = require('express');
const app = express();
const port = 3000;

const productsRouter = require('./routes/productsRouter.js')

app.use(express.json());

app.use('/products', productsRouter)

app.listen(port, () => {
  console.log(`Connected to port: ${port}`)
})