 import React, { Component } from 'react';
 import Guesses from './Guesses'
 import { updateGuessesFormData } from '../actions/guessesForm'
 import { createGuess } from '../actions/Guesses'
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux'



 class GuessesForm extends Component {

 handleOnChange = event => {
 	const { name, value } = event.target
 	console.log(name)
 	const currentGuessesFormData = Object.assign({}, this.props.guessesFormData, {
 		[name]: value
 	})
 	this.props.updateGuessesFormData(currentGuessesFormData)
 }

 handleOnSubmit = event => {
 	event.preventDefault()
 	this.props.createGuess(this.props.guessesFormData)
 }

 	render() {
 		// debugger
 		//defining 2 things at once is called 'destructuring'
 	  const {guess, date} = this.props.guessesFormData
 	  if (this.props.forecast) {const {temperature} = this.props.forecast}
 	  	debugger
 	  
 	  return (
 	  	<div>
 	  	  <h4> venture a guess in Celsius! </h4>
 	  	  	<div>
 	  	  	  <h5> (try not to do the math) </h5>
 	  	  	</div>
 	  	  	<form onSubmit={this.handleOnSubmit}>
 	  	    <label htmlFor="guess"></label>
 	  	    <input type="text" onChange={this.handleOnChange} name="guess" value={guess} />
 	  	    <button type="submit"> guess! </button>
 	  	  </form> 
 	  	</div>
 	  )	
 	}
 }

const mapStateToProps = state => {
	return {
		guessesFormData: state.guessesFormData
	}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateGuessesFormData, createGuess }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessesForm);