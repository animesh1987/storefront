import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../store/actions/category';
import { addToCart } from '../store/actions/cart';
import { Loading } from '../components/loading/Loading';
import './Product.css';

class Product extends Component {

  componentWillMount() {
    this.props.getProduct(this.props.match.params);
  }

  render() {
    let style;
    if (!this.props.loading) {
      style = {
        backgroundImage:
          `url(${process.env.PUBLIC_URL}/media/${this.props.product.image})`,
      };
    }

    return this.props.loading ? 
      <div className="Category flex flex-column">
        <Loading />
      </div> :
      <div className="Product flex flex-column">
        <h4>
          HOME / PLATES / <span>{this.props.product.title}</span>
        </h4>
        <div className="Product__detail-container flex flex-row">
          <div className="Product__image"  style={style}></div>
          <div className="Product__detail">
            <p className="Product__detail-brand">{this.props.product.brand}</p>
            <p className="Product__detail-title">{this.props.product.title}</p>
            <p className="Product__detail-price">${this.props.product.price}.00</p>
            <p className="Product__detail-description">${this.props.product.description}.00</p>
            <div className="Product__cart-actions flex flex-row">
              <span>1</span>
              <div className="flex flex-column">
                <i className="material-icons">add</i>
                <i className="material-icons">remove</i>
              </div>
              <button onClick={() => this.props.addToCart(this.props.product)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
  }
}

const mapStateToPros = state => {
  return ({
    product: state.category.product,
    loading: state.category.loading
})};

// Maps dispatch actions to props.
const mapDispatchToProps = dispatch => ({
  getProduct: (id) => dispatch(getProductById(id)),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToPros, mapDispatchToProps)(Product);
