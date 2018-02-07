import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (state =  {
	guess: '',
	temperature: ''
}, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return Object.assign({}, state, action.guessesFormData)
		
		case 'CHECK_GUESS':
			  return action.guessesFormData

		case 'RESET_GUESS_FORM':
			  return state

		default:
			return state
	}
}