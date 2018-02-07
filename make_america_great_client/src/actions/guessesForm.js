export const updateGuessesFormData = guessesFormData => {
	return {
	  type: 'UPDATED_DATA',
 	  guessesFormData
	 }
}

export const checkGuessFormData = guessesFormData => {
  	return {
      type: 'CHECK_GUESS'
  	}
}

export const resetGuessFormData = () => {
  	return {
      type: 'RESET_GUESS_FORM'
  	}
}