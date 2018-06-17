import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Overlay } from '../overlay/Overlay';
import './Product-Tile.css';

export class ProductTile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayOverlay: false
    };
  }

  render() {
    const style = {
      backgroundImage:
        `url(${process.env.PUBLIC_URL}/media/${this.props.product.image})`,
    };

    const overlayClass = this.state.displayOverlay ? 'display-overlay' : '';

    // Sets display of overlay to true on mouse enter.
    const handleMouseEnter = () => this.setState({displayOverlay: true});
    
    // Sets display of overlay to false on mouse leave.
    const handleMouseLeave = () => this.setState({displayOverlay: false});

    return (
      <div className="Product-Tile flex flex-column">
        <div className="Product-Tile__image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={style}>
          <Overlay
            id={this.props.product.id}
            addToCart={this.props.addToCart}
            classToDisplay={`${overlayClass} overlay flex flex-column`} />
        </div>
        <Link to={`/product/${this.props.product.id}`}>
          {this.props.product.brand}
        </Link>
        <p>{this.props.product.title}</p>
        <p>${this.props.product.price}</p>
      </div>
    );
  }
}
