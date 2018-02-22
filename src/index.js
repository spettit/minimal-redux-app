import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import App from './components/app';

// minimal implementation (no middleware, no dev-tools)
// const store = createStore(reducers);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
