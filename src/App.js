import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Category from "./category/Category";
import Cart from "./cart/Cart";
import Product from "./product/Product";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Category} />
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>
      </div>
    );
  }
}

export default App;
