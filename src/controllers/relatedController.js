const axios = require('axios');

exports.getRelatedProducts = async (req, res) => {
  try {
    const URL = `${process.env.API_URL}/products/${req.params.id}/related`;
    const { data: relatedProductsArray } = await axios(URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

      const relatedProductsPromisesArray = relatedProductsArray.map(async relatedProductId => {

      const relatedProductResponse = {}

      const allID = `${process.env.API_URL}/products/${relatedProductId}`;
      const { data: fullRelatedProduct } = await axios(allID, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });

      relatedProductResponse.id = fullRelatedProduct.id
      relatedProductResponse.name = fullRelatedProduct.name
      relatedProductResponse.category = fullRelatedProduct.category
      relatedProductResponse.features = fullRelatedProduct.features

      const allRelatedRating = `${process.env.API_URL}`;
      const { data: relatedRatingAverage } = await axios(`${allRelatedRating}/reviews/meta?product_id=${relatedProductId}`, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });

      const { ratings } = relatedRatingAverage;
      const numberOfPeopleGivingStars = Object.values(ratings);
      const numberOfStarsGivenByPeople = Object.keys(ratings);
      const totalNumberOfGivenStars = numberOfPeopleGivingStars.reduce((acc, num) => (num * 1) + acc, 0)
      const sumOfAllStarsGiven = numberOfStarsGivenByPeople.reduce((acc, item, index) => (item * numberOfPeopleGivingStars[index]) + acc, 0)
      const ratingAverage =  sumOfAllStarsGiven / totalNumberOfGivenStars;

      relatedProductResponse.ratingAverage = ratingAverage;

      const allStyles = `${process.env.API_URL}/products/${relatedProductId}`;
      const { data: relatedStyles } = await axios(`${allStyles}/styles`, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });

      relatedProductResponse.original_price = relatedStyles.results[0].original_price
      relatedProductResponse.sale_price = relatedStyles.results[0].sale_price;
      relatedProductResponse.thumbnail_url = relatedStyles.results[0].photos[0].thumbnail_url

      return relatedProductResponse;

    })

    const fullRelatedProducts = await Promise.all(relatedProductsPromisesArray)

    res.status(200).json({
      status: 'success',
      data: fullRelatedProducts,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};
