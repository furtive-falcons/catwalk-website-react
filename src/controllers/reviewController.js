const axios = require('axios');

const usedReviewIdsUpvote = {};
const usedReviewIdsReport = {};

exports.getReviews = (req, res) => {
  const url = `${process.env.API_URL}/reviews`;
  axios(url, {
    method: 'get',
    headers: {
      Authorization: process.env.API_KEY,
    },
    params: {
      product_id: req.query.product_id,
      sort: req.query.sort,
      count: req.query.count,
      page: req.query.page,
    },
  })
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => res.status(500).send(err));
};

exports.getMeta = (req, res) => {
  const url = `${process.env.API_URL}/reviews/meta`;
  axios(url, {
    method: 'get',
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

exports.post = (req, res) => {
  const url = `${process.env.API_URL}/reviews`;
  axios(url, {
    method: 'post',
    headers: {
      Authorization: process.env.API_KEY,
    },
    data: {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics,
    },
  })
    .then((result) => {
      res.status(201).json(result.data);
    })
    .catch((err) => res.status(500).send(err));
};

exports.upVote = (req, res) => {
  // check if id already exist, if not then make the call
  if (!usedReviewIdsUpvote.hasOwnProperty(req.body.review_id)) {
    usedReviewIdsUpvote[req.body.review_id] = true;
    const url = `${process.env.API_URL}/reviews/${req.body.review_id}/helpful`;
    axios(url, {
      method: 'put',
      headers: {
        Authorization: process.env.API_KEY,
      },
    })
      .then((result) => {
        res.status(204).json('upvoted!');
      })
      .catch((err) => res.status(500).send(err));
  } else {
    // if already exist return with status 500
    res.status(500).send('already upvoted before');
  }
};

exports.report = (req, res) => {
  // check if id already exist, if not then make the call
  if (!usedReviewIdsReport.hasOwnProperty(req.body.review_id)) {
    usedReviewIdsReport[req.body.review_id] = true;
    const url = `${process.env.API_URL}/reviews/${req.body.review_id}/report`;
    axios(url, {
      method: 'put',
      headers: {
        Authorization: process.env.API_KEY,
      },
    })
      .then((result) => {
        res.status(204).json('reported!');
      })
      .catch((err) => res.status(500).send(err));
  } else {
    // if already exist return with status 500
    res.status(500).send('already reported before');
  }
};
