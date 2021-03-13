import React from 'react';
import axios from 'axios';
import { string } from 'prop-types';
import Carousel from './components/Carousel/Carousel';

class CompareCarousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
    };
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    this.getRelatedProducts(productId);
  }

  getRelatedProducts(productId) {
    const url = '/api/products';
    axios.get(`${url}/${productId}/related`)
      .then((res) => {
        this.setState({ relatedProducts: res.data.data });
      }, (err) => {
        console.log('err', err);
      });
  }

  render() {
    const { relatedProducts } = this.state;
    return (
      <div data-test="component-compare">
        <Carousel relatedProducts={relatedProducts} />
        {/* <Carousel relatedProducts={this.state.relatedProducts}/> */}
      </div>
    );
  }
}

CompareCarousels.propTypes = {
  productId: string,
};

CompareCarousels.defaultProps = {
  productId: null,
};

export default CompareCarousels;
