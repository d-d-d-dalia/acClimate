// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   guesses: guessesReducer, 
// });
 
// export const store = createStore(rootReducer);

// each reducer should handle 1 action, and you can use combine reducers to ensure all get called

// export default function guessesReducer(state = {
//   guesses: []
// }, action) {
//   console.log(action);
//   switch(action.type) {
 
//     case 'INCREASE_COUNT':
//       console.log("Current state.guesses length %s", state.guesses.length);
//       console.log("Updating state.guesses length to %s", state.guesses.length + 1);
//       return Object.assign({}, state, { guesses: state.guesses.concat(state.guessess.length + 1) });
 
//     default:
//     console.log(state)
//       console.log("Initial state.guesses length: %s", state.guesses.length);
//       return state;
//   }
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';

export function guessesHasErrored(state = false, action) {
    switch (action.type) {
        case 'GUESSES_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function guessesIsLoading(state = false, action) {
    switch (action.type) {
        case 'GUESSES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function guesses(state = [], action) {
    switch (action.type) {
        case 'GUESSES_FETCH_DATA_SUCCESS':
            return action.guesses;

        default:
            return state;
    }
}

// guessesIncreaseCorrectCountReducer
// guessesLoadingReducer
// guessesFetchingSuccess