import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (state = {
    error: false, loading: false, guesses: []
    }, action) => {
    switch (action.type) {
        case 'GUESSES_HAS_ERRORED':
            return action.hasErrored;
        case 'GUESSES_IS_LOADING':
            return action.isLoading;
        case 'GUESSES_FETCH_DATA_SUCCESS':
            return action.guesses;
        case 'CREATE_GUESS_SUCCESS':
            return state.concat(action.guess)
        default:
            return state;
    }
}