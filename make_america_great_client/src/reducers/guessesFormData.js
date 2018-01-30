import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (state =  {
	guess: '',
	date: ''
}, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return Object.assign({}, state, action.guessesFormData)
		default:
			return state
	}
}