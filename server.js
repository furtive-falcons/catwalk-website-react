const express = require('express');
const app = express();
const dotenv = require('dotenv');
const productRouter = require('./src/routes/productRoutes');

dotenv.config({
  path: './config.env',
});
// middlewares
app.use(express.json());
app.use('/', express.static(__dirname + '/dist'));
app.use('/', express.static(__dirname + '/public'));
app.use('/api/products', productRouter);
const PORT = 3001;

// app.get('/', (req, res) => {
//   res.send(`test`)
// })

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
