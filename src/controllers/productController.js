const axios = require('axios');

// API Local
const URLLOCALHOST = 'http://127.0.0.1:8394';

exports.getProductInformation = async (req, res) => {
  try {
    const URL = `${URLLOCALHOST}/products/${req.params.id}`;
    const { data: productInformation } = await axios(URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const { data: productStyles } = await axios(`${URLLOCALHOST}/styles/${req.params.id}`, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const { data: ratingReviews } = await axios(
      `${process.env.API_URL}/reviews/meta?product_id=${req.params.id}`,
      {
        headers: {
          Authorization: process.env.API_KEY,
        },
      },
    );

    const { ratings } = ratingReviews;

    const values = Object.values(ratings);
    const keys = Object.keys(ratings);
    const numberOfReviews = values.reduce((acc, item) => item * 1 + acc, 0);
    const ratingAverage = values.reduce((acc, item, i) => item * keys[i] + acc, 0)
      / numberOfReviews;

    res.status(200).json({
      status: 'success',
      data: {
        productStyles,
        productInformation,
        ratingAverage,
        numberOfReviews,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};
