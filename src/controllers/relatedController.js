const axios = require('axios');

exports.getRelatedProducts = async (req, res) => {
  try {
    const URL = `${process.env.API_URL}/products/${req.params.id}/related`;
    const { data: relatedProductsArray } = await axios(URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });
    // [1, 2, 3]
    // getId[i] = relatedProductsArray[i]
    // relatedProducts.forEach((id) => {});
    // let relatedProducts = {14034: {relatedProduct: {defaultStyle: {styleObj: 1}}}};

    let relatedProducts = {};
    for (let i = 0; i < relatedProductsArray.length; i++) {
      // ex: /products/14034
      const allID = `${process.env.API_URL}/products/${relatedProductsArray[i]}`;
      const { data: relatedProduct} = await axios(allID, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });
      relatedProducts[relatedProductsArray[i]] = relatedProduct;

      // ex: /products/14034/styles
      const allStyles = `${process.env.API_URL}/products/${relatedProductsArray[i]}`;
      const { data: relatedStyles } = await axios(`${allStyles}/styles`, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });
      
      // if(relatedStyles.results["default?"]) {
      //   relatedProduct.defaultStyle = relatedStyles.results;
      // }

      relatedProduct.defaultStyle = relatedStyles.results[0];

      // ex: /reviews/meta?product_id=14034
      const allRelatedRating = `${process.env.API_URL}`;
      const { data: relatedRatingAverage } = await axios(`${allRelatedRating}/reviews/meta?product_id=${relatedProductsArray[i]}`, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });
  
      const { ratings } = relatedRatingAverage;
  
      const values = Object.values(ratings);
  
      const ratingAverage = values.reduce((acc, item) => item * 1 + acc, 0) / 5;

      relatedProduct.ratingAverage = ratingAverage;
    }

    res.status(200).json({
      status: 'success',
      data: Object.values(relatedProducts),
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};
