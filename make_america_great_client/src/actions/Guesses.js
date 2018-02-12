const addGuess = guess => {
    //line 2-5 is the action, the creator is the addGuess function, so return value of action creator is action itself
    return {
        type: 'CREATE_GUESS_SUCCESS',
        guess
    }
}

export const createGuess = (guess) => {
	// return dispatch => {

		return fetch(`http://localhost:3001/api/guesses`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ guess: guess })
	   })
        .then(response => response.json())
        .then(guess => (addGuess(guess)))
        .then(error => console.log(error))
    // }
}

export function addLike(likeInfo){
    return dispatch => {
        //fetch always by default sends a get req. if we want to, we can alter that in the second arg of the function
        return fetch(`http://localhost:3001/api/guesses/${likeInfo.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({guess: likeInfo})
        })
            //this makes it json - not sure if it's necessary
            .then(response => response.json())
            //this dispatches to action, and specifies that the payload = data
            .then(data => dispatch( { type: 'ADD_LIKE', payload: data })) 
    }
}

export function guessesHasErrored(bool) {
    return {
        type: 'GUESSES_HAS_ERRORED',
        hasErrored: bool
    }
}

export function guessesIsLoading(bool) {
    return {
        type: 'GUESSES_IS_LOADING',
        isLoading: bool
    }
}

export function guessesFetchDataSuccess(guesses) {
    return {
        type: 'GUESSES_FETCH_DATA_SUCCESS',
        guesses
    }
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(guessesHasErrored(true));
        }, 5000);
    }
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
    }
}