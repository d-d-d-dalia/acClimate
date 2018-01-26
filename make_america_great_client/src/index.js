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

//TEST COMMENTS AFTER THIS BLOCK OF CODE BC MAY BE A SYNTAX ERROR?

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App store={store}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
