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
 	  const {guess, date} = this.props.guessesFormData
 	  return (
 	  	<div>
 	  	  <h4> What does the temperature feel like in Celsius? </h4>
 	  	  <form onSubmit={this.handleOnSubmit}>
 	  	    <label htmlFor="guess"></label>
 	  	    <input type="text" onChange={this.handleOnChange} name="guess" value={guess} />
 	  	    <button type="submit"> Guess! </button>
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