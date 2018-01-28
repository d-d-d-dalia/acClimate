// import fetch from 'isomorphic-fetch';
// export function fetchGuesses() {

// export function fetchGuesses() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//     return fetch('http://www..com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   };
// }

export const createGuess = guess => {
	return dispatch => {
        //i'm not sure what this url is supposed to be
		return fetch(`http://localhost:3001/api/guesses`, {
          method: "POST",
          headers: {
            'Conent-Type': 'application/json'
          },
        data: JSON.stringify(guess)
	   })
        .then(response => response.json())
        .then(guess => {debugger})
        .then(error => console.log(error))
    }
}

export function guessesHasErrored(bool) {
    return {
        type: 'GUESSES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function guessesIsLoading(bool) {
    return {
        type: 'GUESSES_IS_LOADING',
        isLoading: bool
    };
}

export function guessesFetchDataSuccess(guesses) {
    return {
        type: 'GUESSES_FETCH_DATA_SUCCESS',
        guesses
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(guessesHasErrored(true));
        }, 5000);
    };
}

export const guessesFetchData = () => {
    return (dispatch) => {
        dispatch(guessesIsLoading(true));

        fetch('http://localhost:3001/api/guesses')
            .then((response) => {

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(guessesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((guesses) => dispatch(guessesFetchDataSuccess(guesses)))
            .catch(() => dispatch(guessesHasErrored(true)));
    };
}