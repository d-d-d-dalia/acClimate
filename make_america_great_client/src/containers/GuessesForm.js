 import React, { Component } from 'react'
 import { updateGuessesFormData } from '../actions/guessesForm'
 import { createGuess } from '../actions/Guesses'
 import { connect } from 'react-redux'
 import { bindActionCreators } from 'redux'
 import { checkGuess} from './Guesses'

 class GuessesForm extends Component {

 	constructor (props) {
		super (props)

		this.state = {
			showResult: false
		}
	}

 handleOnChange = event => {
 	//in reference to input types on line 50
 	const { name, value } = event.target
 	let temperature = temperature || 0
 	if (this.props.forecast) {temperature = this.props.forecast.temperature}
 	const currentGuessesFormData = Object.assign({}, this.props.guessesFormData, {
 		//it will look for a key and value of the same name, temperature
 		[name]: value, temperature: temperature
 	})
 	//updates state to include info from form
 	this.props.updateGuessesFormData(currentGuessesFormData)
 	this.setState({showResult: false})
 }

 handleOnSubmit = event => {
 	event.preventDefault()

 	this.props.createGuess(this.props.guessesFormData)
 	this.setState({showResult: true})
 	// this.props.resetGuessFormData()
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
 	  	    <input type="text" onChange={this.handleOnChange} name="guess" value={guess} autoComplete="off" />
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
	//bind action creators says 'pipe the return value of the action creators thru all reducers'
    return bindActionCreators({ updateGuessesFormData, createGuess }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessesForm)

