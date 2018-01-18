export default function scorerecordsReducer(state = {
  scorerecords: []
}, action) {
  console.log(action);
  switch(action.type) {
 
    case 'INCREASE_COUNT':
      console.log("Current state.scorerecords length %s", state.scorerecords.length);
      console.log("Updating state.scorerecords length to %s", state.scorerecords.length + 1);
      return Object.assign({}, state, { scorerecords: state.scorerecords.concat(state.scorerecords.length + 1) });
 
    default:
      console.log("Initial state.scorerecords length: %s", state.scorerecords.length);
      return state;
  }
}