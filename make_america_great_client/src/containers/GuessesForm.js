 import React, { Component } from 'react';
 import Guesses from './Guesses'
 import { updateGuessesFormData } from '../actions/guessesForm'
 import { createGuess } from '../actions/Guesses'
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux'

 class GuessesForm extends Component {

 handleOnChange = event => {
 	const { name, value } = event.target
 	let temperature = temperature || 0
 	if (this.props.forecast) {temperature = this.props.forecast.temperature}
 	const currentGuessesFormData = Object.assign({}, this.props.guessesFormData, {
 		//it will look for a key and value of the same name, temperature
 		[name]: value, temperature: temperature
 	})
 	this.props.updateGuessesFormData(currentGuessesFormData)
 }

 handleOnSubmit = event => {
 	event.preventDefault()
 	this.props.createGuess(this.props.guessesFormData)
 }

 	render() {
 		//defining 2 things at once is called 'destructuring'
 	  const {guess, date} = this.props.guessesFormData

 	  return (
 	  	<div>
 	  	  <h4> venture a guess in Celsius! </h4>
 	  	  	<div>
 	  	  	  <h5> (try not to do the math) </h5>
 	  	  	</div>
 	  	  	<form onSubmit={(event) => this.handleOnSubmit(event)}>
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