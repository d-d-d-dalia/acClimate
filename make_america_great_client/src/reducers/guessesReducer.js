export default (state = {
    error: false, loading: false, guesses: []
    }, action) => {
    switch (action.type) {
        case 'GUESSES_HAS_ERRORED':
            return { 
                //spread operator: "for every key value pair in this value 'state', apply them here"
              ...state,
              error : action.hasErrored 
            }
        case 'GUESSES_IS_LOADING':
            return { 
              ...state,
              loading : action.isLoading 
            }
        case 'GUESSES_FETCH_DATA_SUCCESS':
            return { 
              ...state,
              guesses : action.guesses 
            }
        case 'CREATE_GUESS_SUCCESS':
                debugger
            return { 
              ...state,
              guesses : [ ...state.guesses, action.guess ] 
            }
        default:
            return state
    }
}