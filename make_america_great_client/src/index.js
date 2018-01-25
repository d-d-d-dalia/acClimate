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
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// provider makes the store available to all container components
// theres a single store that contains a state
// reducers are functions that are current state + action which leads to the new state
// reducers are always called by the store
// store does a dispatch which takes in an action, which calls the appropriate reducer which creates new state from the old