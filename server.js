const express = require('express');

const app = express();

// middlewares
app.use(express.json());
app.use('/', express.static(__dirname + '/dist'))

const PORT = 3001;

// app.get('/', (req, res) => {
//   res.send(`test`)
// })

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`)
})