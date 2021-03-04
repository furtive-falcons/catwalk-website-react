const axios = require('axios');

exports.getProductInformation = async (req, res) => {
  try {
    const URL = `${process.env.API_URL}/products/${req.params.id}`;
    const { data: productInformation } = await axios(URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const { data: productStyles } = await axios(`${URL}/styles`, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        productStyles,
        productInformation,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error
    });
  }
};
