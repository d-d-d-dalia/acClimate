import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import Guesses from './containers/Guesses'
import About from './components/About'
import howItWorks from './components/howItWorks'
import registerServiceWorker from './registerServiceWorker'
//applyMiddleware is re redux thunk
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import guessesReducer from './reducers/guessesReducer'
import guessesFormData from './reducers/guessesFormData'

import {   BrowserRouter as Router,   Route, 	Switch } from 'react-router-dom'

const combinedReducer = combineReducers({
    guessesReducer,
    guessesFormData
})

const loggerMiddleware = createLogger()

registerServiceWorker()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combinedReducer, composeEnhancers( 
	applyMiddleware(thunk, loggerMiddleware) 
	))

ReactDOM.render(
  //provider gives react application access to the store
  <Provider store={store}>
    <Router>
    	<Switch>
      	  <Route exact path="/" component={ App } />
      	  <Route path="/guesses" component= { Guesses } />
      	  <Route path="/about" component= { About } />
          <Route path="/howitworks" component={ howItWorks } />
      	</Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)