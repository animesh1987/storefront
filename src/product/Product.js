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

  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  addToCart(params) {
    console.log('cadca');
    let { product, quantity } = params;
    let cart = [...this.props.cart];
    const productInCart = this.props.cart.find(
      cartProduct => cartProduct.id === product.id)
    console.log('aa',productInCart);
    if (this.props.cart.length > 0 && !!productInCart) {
      const initialQuantity = productInCart.quantity;
      const indexOfProduct = cart.indexOf(productInCart);
      cart.splice(indexOfProduct, 1);
      quantity = quantity + initialQuantity;
      cart.push(Object.assign(product, {quantity}));
    } else {
      cart = [...this.props.cart, ...[
        Object.assign(product, {quantity})]
      ];
    }
    this.props.addToCart(cart);
  }

  // Increments product quantity to add in cart.
  increment = () => {
    let quantity = this.state.quantity;
    quantity++;
    this.setState({quantity});
  }

  // Decrements product quantity to add in cart.
  decrement = () => {
    let quantity = this.state.quantity;
    quantity--;
    if (quantity >= 1) {
      this.setState({quantity});
    } else {
      alert('Must have one quantity for product');
    }
  };

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
            <p className="Product__detail-description">{this.props.product.description}</p>
            <div className="Product__cart-actions flex flex-row">
              <span>{this.state.quantity}</span>
              <div className="flex flex-column">
                <i onClick={() => this.increment()}
                  className="material-icons">add</i>
                <i onClick={() => this.decrement()}
                  className="material-icons">remove</i>
              </div>
              <button
                onClick={() =>
                  this.addToCart({
                    product: this.props.product,
                    quantity: this.state.quantity}
                    )}>
                  Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
  }
}

const mapStateToPros = state => {
  console.log(state);
  return ({ 
    product: state.category.product,
    loading: state.category.loading,
    cart: state.cart.cart
})};

// Maps dispatch actions to props.
const mapDispatchToProps = dispatch => ({
  getProduct: (id) => dispatch(getProductById(id)),
  addToCart: (params) => dispatch(addToCart(params))
});

export default connect(mapStateToPros, mapDispatchToProps)(Product);
