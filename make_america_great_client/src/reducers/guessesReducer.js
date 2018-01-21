// import { combineReducers } from 'redux';



// const rootReducer = combineReducers({
//   guesses: guessesReducer, 
// });
 
// export const store = createStore(rootReducer);

export default function guessesReducer(state = {
  guesses: []
}, action) {
  console.log(action);
  switch(action.type) {
 
    case 'INCREASE_COUNT':
      console.log("Current state.guesses length %s", state.guesses.length);
      console.log("Updating state.guesses length to %s", state.guesses.length + 1);
      return Object.assign({}, state, { guesses: state.guesses.concat(state.guessess.length + 1) });
 
    default:
      console.log("Initial state.guesses length: %s", state.guesses.length);
      return state;
  }
}