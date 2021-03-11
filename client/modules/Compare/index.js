import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Carousel from './components/Carousel/Carousel';
// import CarouselContainer from './components/Carousel/styles';

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
    const url = '/api/products';
    axios.get(`${url}/${productId}/related`)
      .then((res) => {
        this.setState({relatedProducts: res.data});
      }, (err) => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <div data-test="component-compare">
        <Carousel relatedProducts={this.state.relatedProducts}/>
        {/* <Carousel relatedProducts={this.state.relatedProducts}/> */}
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
