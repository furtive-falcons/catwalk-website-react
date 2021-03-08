import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Carousel from './components/Carousel/Carousel';
// import CarouselContainer from './components/Carousel/styles';
// client/modules/Compare/components/Carousel/styles.js

class CompareCarousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
    };
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  // getRelatedProducts(14034) = [14038, 14042, 14040, 14035, 14034]
  componentDidMount() {
    this.getRelatedProducts(this.props.productId);
  }

  getRelatedProducts(productId) {
    const url = 'http://localhost:3001/api/products';
    axios.get(`${url}/${productId}/related`)
      .then((res) => {
        // console.log('res', res.data);
        this.setState({relatedProducts: res.data});
      }, (err) => {
        console.log(err);
      });
  }

  // relatedDetails() {
  //   // for every element in related ids array
  //   // make call to api for every element
  //   // GET /products/:product_id
  //   // GET /products/:product_id/styles
  //   let requests =  relatedIds.map(id => {
  //     return new Promise((resolve, reject) => {
  //       request({

  //       })
  //     })
  //   })
  // }

  render() {
    return (
      <div data-test="component-compare">
        <Carousel />
        <Carousel />
      </div>
    );
  }
}

// CompareCarousels.propTypes = {
//   productId: PropTypes.string,
// };

// CompareCarousels.defaultProps = {
//   productId: null,
// };

export default CompareCarousels;
