const axios = require('axios');

exports.getRelatedProducts = async (req, res) => {
  try {
    const URL = `${process.env.API_URL}/products/${req.params.id}/related`;
    const { data: relatedProducts } = await axios(URL, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });
    // [1, 2, 3]
    // var sum = function(x + 1)
    // relatedProducts.forEach((id) => {});
    // let getId = {};
    // for (let i = 0; i < relatedProducts.length; i++) {
    //   getId[i] = sum(relatedProducts[i]);
    //   const firstID = `${process.env.API_URL}/products/${relatedProducts[i]}`;
    //   const { data: firstProduct } = await axios(firstID, {
    //     headers: {
    //       Authorization: process.env.API_KEY,
    //     },
    //   });
    // }

    const firstID = `${process.env.API_URL}/products/${relatedProducts[0]}`;
    const { data: firstProduct } = await axios(firstID, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const secID = `${process.env.API_URL}/products/${relatedProducts[1]}`;
    const { data: secProduct } = await axios(secID, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const thirdID = `${process.env.API_URL}/products/${relatedProducts[2]}`;
    const { data: thirdProduct } = await axios(thirdID, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const fourthID = `${process.env.API_URL}/products/${relatedProducts[3]}`;
    const { data: fourthProduct } = await axios(fourthID, {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        relatedProducts,
        firstProduct,
        secProduct,
        thirdProduct,
        fourthProduct,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};
