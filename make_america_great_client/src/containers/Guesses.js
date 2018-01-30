import { connect } from 'react-redux';
import { guessesFetchData } from '../actions/Guesses';
import React, { Component } from 'react';
import {  Route, 	Switch , Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { CurrentForecast } from '../components/CurrentForecast'

//const guessConverted = ({guess} - 32)/1.8
//( diff btw {temperature} & {guess} <= 5 ) ? "right on!" : "womp-womp"
  
class Guesses extends Component {
    componentDidMount() {

        this.props.fetchData('/api/guesses');
    }

    render() {
        console.log(this.props)
        if (this.props.hasErrored) {
            return <p>Sorry, there was a loading error</p>;
        }

        if (this.props.isLoading) {
            return <p> Loading… </p>;
        }

        return (
        	<div className="Guesses Container">
			  <h4> Your Guesses: </h4>
				{this.props ? this.props.guesses.map((guess, i) =>
				  <div className="GuessCard" key={i} >
				  <p> {guess.date} - {guess.guess ? "right on!" : "womp-womp"}</p>
				  </div>
				) : 'uh oh' }
			  <Link to={`/`} > <h5> home </h5> </Link>
			  <Link to={`/about`} > <h5> about the app </h5> </Link>
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('yes im being called')
    console.log(state)
    return {
        guesses: state.guessesReducer.guesses,
        hasErrored: state.guessesReducer.error,
        isLoading: state.guessesReducer.loading,
        temperature: state.temperature
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData: guessesFetchData }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Guesses);