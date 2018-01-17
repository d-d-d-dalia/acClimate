import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import scorerecordsReducer from './reducers/scorerecordsReducer';

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker();
 
const store = createStore(scorerecordsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
// provider makes the store available to all container components

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// theres a single store that contains a state
// reducers are functions that are current state + action which leads to the new state
// reducers are always called by the store
// store does a dispatch which takes in an action, which calls the appropriate reducer which creates new state from the old