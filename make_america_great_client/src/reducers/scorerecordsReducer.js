
export default function scorerecordsReducer(state = {
  scorerecords: []
}, action) {
  console.log(action);
  switch(action.type) {
 
    case 'INCREASE_COUNT':
      console.log("Current state.scorerecords length %s", state.scorerecords.length);
      console.log("Updating state.items length to %s", state.scorerecords.length + 1);
      return Object.assign({}, state, { items: state.items.concat(state.scorerecords.length + 1) });
 
    default:
      console.log("Initial state.items length: %s", state.scorerecords.length);
      return state;
  }
}