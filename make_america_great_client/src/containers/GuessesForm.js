 import React, { Component } from 'react';
 import Guesses from './Guesses'

 handleOnChange =  

 class GuessesForm extends Component {
 	render() {
 	  const {guess, date} = this.props.guessesFormData
 	  return (
 	  	<div>
 	  	  Venture a guess in celsius!
 	  	  <form>
 	  	    <label htmlFor="guess">your guess today:</label>
 	  	    <input type="text" name="guess" value={guess} />
 	  	  </form> 
 	  	</div>
 	  )	
 	}
 }

 export default GuessesForm