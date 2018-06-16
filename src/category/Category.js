import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../store/actions/category';
import { addToCart } from '../store/actions/cart';
import { ProductTile } from './product-tile/Product-Tile';
import { Carousel } from './carousel/Carousel';
import { Loading } from '../components/loading/Loading';
import './Category.css';

class Category extends Component {

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return this.props.loading ? 
      <div className="Category flex flex-column">
        <Carousel />
        <Loading />
      </div> :
      <div className="Category flex flex-column">
        <Carousel />
        <div className="Category__products-list flex flex-row flex-wrap">
          {this.props.products.map(product => 
            <ProductTile
              addToCart={() => this.props.addToCart(product)}
              key={product.id}
              product={product}/>
          )}
        </div>
      </div>
  }
}

// Maps state data to props.
const mapStateToPros = state => {
  console.log(state);
  return ({
  products: state.category.products,
  loading: state.category.loading
})};

// Maps dispatch actions to props.
const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToPros, mapDispatchToProps)(Category);
