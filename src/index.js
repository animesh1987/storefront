import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import headerReducer from './store/reducers/header';
import './index.css';
import App from './App';

// Combine reducers to create root.
const rootReducer = combineReducers({
  header: headerReducer
});

// Create store with reducer and middleware.
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
