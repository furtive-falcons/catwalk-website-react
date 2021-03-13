const express = require('express');

const app = express();
const dotenv = require('dotenv');
const productRouter = require('./src/routes/productRoutes');
const qaRouter = require('./src/routes/qaRoutes');
const reviewRouter = require('./src/routes/reviewRoutes');

dotenv.config({
  path: './config.env',
});

app.use(express.json());
app.use('/', express.static(`${__dirname}/dist`));
app.use('/', express.static(`${__dirname}/public`));
const PORT = 3000;

app.use('/api/products', productRouter);
app.use('/qa', qaRouter);
app.use('/reviews', reviewRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Port: ${PORT}`);
});
