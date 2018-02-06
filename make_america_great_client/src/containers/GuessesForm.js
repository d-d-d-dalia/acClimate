 import React, { Component } from 'react';
 import { updateGuessesFormData } from '../actions/guessesForm'
 import { createGuess } from '../actions/Guesses'
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux'
 import { checkGuess } from './Guesses'

 class GuessesForm extends Component {

 	constructor (props) {
		super (props)

		this.state = {
			showResult: false
		}
	}

 handleOnChange = event => {
 	const { name, value } = event.target
 	let temperature = temperature || 0
 	if (this.props.forecast) {temperature = this.props.forecast.temperature}
 	const currentGuessesFormData = Object.assign({}, this.props.guessesFormData, {
 		//it will look for a key and value of the same name, temperature
 		[name]: value, temperature: temperature
 	})
 	this.props.updateGuessesFormData(currentGuessesFormData)
 	this.setState({showResult: false})
 }

 handleOnSubmit = event => {
 	event.preventDefault()
 	this.props.createGuess(this.props.guessesFormData)
 	this.setState({showResult: true})
 }

 	render() {
 		//defining 2 things at once is called 'destructuring'
 	  const {guess, date, temperature} = this.props.guessesFormData

 	  return (
 	  	<div>
 	  	  <h4> venture a guess in celsius! </h4>
 	  	  	<div>
 	  	  	  <h5> (try not to do the math) </h5>
 	  	  	</div>
 	  	  	<form onSubmit={(event) => this.handleOnSubmit(event)}>
 	  	    <label htmlFor="guess"></label>
 	  	    <input type="text" onChange={this.handleOnChange} name="guess" value={guess} autocomplete="off" />
 	  	    <button type="submit"> guess! </button>

 	  	   	<div>
 	  	  	{ this.state.showResult ? checkGuess(parseInt(guess), temperature) : '' }
 	  	  	</div>

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