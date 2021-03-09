const axios = require('axios');

exports.getRelatedProducts = async (req, res) => {
  try {
    const URL = `${process.env.API_URL}/products/${req.params.id}/related`;
    const { data: relatedProductsArray } = await axios(URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    let relatedProducts = {};
    // i can probably refactor this for loop into a map function and promise.all
    // and i can still use await if i really wanted to
    // worry about this later #tech debt
    for (let i = 0; i < relatedProductsArray.length; i++) {
      const allID = `${process.env.API_URL}/products/${relatedProductsArray[i]}`;
      const { data: relatedProduct} = await axios(allID, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });

      relatedProducts[relatedProductsArray[i]] = relatedProduct;

      const allStyles = `${process.env.API_URL}/products/${relatedProductsArray[i]}`;
      const { data: relatedStyles } = await axios(`${allStyles}/styles`, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });

      relatedProduct.firstStyles = relatedStyles.results[0];
      
      // const filteredStyles = relatedStyles.results.filter(relatedStyle => {
      //   return (relatedStyle["default?"] && relatedStyle.photos[0].thumbnail_url)
      // })
      // relatedProduct.defaultPhotoStyle = filteredStyles;

      const allRelatedRating = `${process.env.API_URL}`;
      const { data: relatedRatingAverage } = await axios(`${allRelatedRating}/reviews/meta?product_id=${relatedProductsArray[i]}`, {
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
