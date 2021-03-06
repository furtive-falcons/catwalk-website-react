const axios = require('axios');

exports.getQA = (req, res) => {
  const url = `${process.env.API_URL}/qa/questions`;
  axios(url, {
    headers: {
      Authorization: process.env.API_KEY,
    },
    params: {
      product_id: req.query.product_id,
    },
  })
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => res.status(500).send(err));
};
