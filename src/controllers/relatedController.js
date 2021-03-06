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
      
      console.log('test', relatedStyles.results[0]["default?"])
      // if(relatedStyles.results[0]["default?"]) {
      // if(relatedStyles.results[0]) {
      relatedProduct.defaultStyle = relatedStyles.results[0];
      // }

      // relatedProduct.defaultStyle = relatedStyles.results[0];

      // ex: /reviews/meta?product_id=14034
      const allRelatedRating = `${process.env.API_URL}`;
      const { data: relatedRatingAverage } = await axios(`${allRelatedRating}/reviews/meta?product_id=${relatedProductsArray[i]}`, {
        headers: {
          Authorization: process.env.API_KEY,
        },
      });
  
      const { ratings } = relatedRatingAverage;
      console.log('ratings', ratings)
  
      const numberOfPeopleGivingStars = Object.values(ratings);
      console.log('values', numberOfPeopleGivingStars)
      
      const numberOfStarsGivenByPeople = Object.keys(ratings);
      console.log('keys', numberOfStarsGivenByPeople)
      
      const totalNumberOfGivenStars = numberOfPeopleGivingStars.reduce((acc, num) => (num * 1) + acc, 0)
      console.log('valueSum', totalNumberOfGivenStars)
      
      const sumOfAllStarsGiven = numberOfStarsGivenByPeople.reduce((acc, item, index) => (item * numberOfPeopleGivingStars[index]) + acc, 0)
      console.log('sumOfAllStarsGiven', sumOfAllStarsGiven)

      const ratingAverage =  sumOfAllStarsGiven / totalNumberOfGivenStars;
      console.log('ratingAverage', ratingAverage)

      // const ratingAverage = values.reduce((acc, item) => item * 1 + acc, 0) / valueSum;
      // console.log('ratingAverage', ratingAverage)

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
