import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
//applyMiddleware is re redux thunk
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import guessesReducer from './reducers/guessesReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();

registerServiceWorker();
 
const store = createStore(guessesReducer, applyMiddleware(thunk, loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// provider makes the store available to all container components
// theres a single store that contains a state
// reducers are functions that are current state + action which leads to the new state
// reducers are always called by the store
// store does a dispatch which takes in an action, which calls the appropriate reducer which creates new state from the old