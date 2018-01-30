import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (state =  {
	guess: 'heyyyyy',
	date: 'todayyyyy'
}, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.guessesFormData
		default:
			return state
	}
}