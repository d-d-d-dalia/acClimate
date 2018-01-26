import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
//applyMiddleware is re redux thunk
import { createStore, applyMiddleware, compose } from 'redux';  
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { guesses, guessesHasErrored, guessesIsLoading } from './reducers/guessesReducer';

import {   BrowserRouter as Router,   Route, 	Switch } from 'react-router-dom'

const combinedReducer = combineReducers({
    guesses,
    guessesHasErrored,
    guessesIsLoading
});

const loggerMiddleware = createLogger();

registerServiceWorker();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(combinedReducer, composeEnhancers( 
	applyMiddleware(thunk, loggerMiddleware) 
	));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
);