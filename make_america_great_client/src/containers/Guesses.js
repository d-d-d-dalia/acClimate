import { connect } from 'react-redux';
import { guessesFetchData } from '../actions/Guesses';//if this becomes responsible for updating the scorerecords, then it could be considered a container component
// import React from 'react';
import React, { Component } from 'react';



class GuessesList extends Component {
    componentDidMount() {

        this.props.fetchData('http://localhost:3001/api/guesses');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry, there was a loading error</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
        	<div className="Guesses Container">
			  <h4> Your Guesses: </h4>
				{this.props.guesses.map((guess, i) =>
				  <div className="GuessCard" key={i} >
				  <p> {guess.date} - {guess.guess}</p>
				  </div>
			)}
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

export default connect(mapStateToProps, mapDispatchToProps)(GuessesList);