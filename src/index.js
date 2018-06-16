import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './store/reducers/cart';
import categoryReducer from './store/reducers/category';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  cart: cartReducer,
  category: categoryReducer
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
  
const app = (
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
