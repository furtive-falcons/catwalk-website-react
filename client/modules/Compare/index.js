import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Carousel from './components/Carousel/Carousel';
// import CarouselContainer from './components/Carousel/styles';
// client/modules/Compare/components/Carousel/styles.js

// const CompareCarousels = () => (
//   <div data-test="component-compare">
//     <Carousel />
//     <Carousel />
//   </div>
// );

// const URL = 'http://localhost:3001/api/products';

// const CompareCarousels = ({ productId }) => {
//   const [relatedIds, setRelatedIds] = React.useState(null);
//   React.useEffect(() => {
//     axios.get(`${URL}/${productId}/related`)
//       .then((response) => {
//         setRelatedIds(response.data.data);
//       });
//   }, []);

//   return (
//     // <div data-test="component-compare">
//     <div>
//       <Carousel relatedIds={relatedIds} />
//       <Carousel />
//     </div>
//   );
// };

class CompareCarousels extends React.Component {
  constructor() {
    super();
    this.state = {
      relatedIds: [],
    };
    this.relatedProducts = this.relatedProducts.bind(this);
  }

  // getRelatedProducts(14034) = [14038, 14042, 14040, 14035, 14034]
  // getRelatedProducts(14035) = [14034, 14035, 14036, 14037, 14038, 14039, 14040, 14041, 14042]
  // getRelatedProducts(14036) = [14035, 14036, 14041, 14040]
  // getRelatedProducts(14040) = [14035, 14036, 14037, 14040, 14042, 14043]
  componentDidMount() {
    // this.setState({});
    console.log('relatedProducts1', this.relatedProducts(14034));
  }

  relatedProducts(productId) {
    const url = 'http://localhost:3001/api/products';
    axios.get(`${url}/${productId}/related`)
      .then((res) => {
        // console.log('res', res);
        this.setState({relatedIds: res.data});
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
