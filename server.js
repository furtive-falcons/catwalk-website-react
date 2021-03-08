const express = require('express');

const app = express();
const dotenv = require('dotenv');
const productRouter = require('./src/routes/productRoutes');
const qaRouter = require('./src/routes/qaRoutes');
const reviewRouer = require('./src/routes/reviewRoutes')

dotenv.config({
  path: './config.env',
});

app.use(express.json());
app.use('/', express.static(`${__dirname}/dist`));
app.use('/', express.static(`${__dirname}/public`));
app.use('/api/products', productRouter);
const PORT = 3001;

app.use('/qa/questions', qaRouter);
app.use('/api/reviews', reviewRouer);
// app.get('/', (req, res) => {
//   res.send(`test`)
// })

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Port: ${PORT}`);
});
