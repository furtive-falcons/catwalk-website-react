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

exports.postQuestion = (req, res) => {
  const url = `${process.env.API_URL}/qa/questions`;
  axios(url, {
    method: 'post',
    headers: {
      Authorization: process.env.API_KEY,
    },
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id,
    },
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(403).send(err));
};

exports.postAnswer = (req, res) => {
  const url = `${process.env.API_URL}/qa/questions/${req.params.question_id}/answers`;
  axios(url, {
    method: 'post',
    headers: {
      Authorization: process.env.API_KEY,
    },
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
    },
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(403).send(err));
};
