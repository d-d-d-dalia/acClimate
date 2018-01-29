import { connect } from 'react-redux';
import { guessesFetchData } from '../actions/Guesses';
import React, { Component } from 'react';
import {  Route, 	Switch , Link } from 'react-router-dom'

  
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
				{this.props.guesses ? this.props.guesses.map((guess, i) =>
				  <div className="GuessCard" key={i} >
				  <p> {guess.date} - {guess.guess}</p>
				  </div>
				) : '' }
			  <Link to={`/`} > <h5> home </h5> </Link>
			  <Link to={`/about`} > <h5> about the app </h5> </Link>
			</div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        guesses: state.guesses,
        hasErrored: state.guessesHasErrored,
        isLoading: state.guessesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(guessesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Guesses);


