import { connect } from 'react-redux'
import { guessesFetchData } from '../actions/Guesses'
import React, { Component } from 'react'
import {  Route, 	Switch , Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { CurrentForecast } from '../components/CurrentForecast'
import Footer from '../components/Footer'

//( diff btw {temperature} & {guess} <= 5 ) ? "right on!" : "womp-womp"
  
class Guesses extends Component {

    componentDidMount() {

        this.props.fetchData('/api/guesses')
    }
//let temperatureC = (guess.temperature * 1.8) + 32
//let absoluteValue = Math.abs({guess.guess - temperatureC})
//absoluteValue <= 3 ? "yaaaaaass" : "womp-womp"

    render() {
        if (this.props.hasErrored) {
            return (
             <p> Sorry, there was a loading error </p>
            )
        }

        if (this.props.isLoading) {
            return (
            <p> Loading… </p>
            )
        }

        return (
        	<div className="Guesses Container">
			  <h4> Your Guesses: </h4>
				{this.props ? this.props.guesses.map((guess, i) =>
				  <div key={i}>
				    <p> {guess.date} - {guess.guess ? "yaaaaasss" : "womp-womp"} - {guess.guess} - {guess.temperature} </p>
                  </div>
                ) : 'uh oh' }
              <div>
			    <Link to={`/about`} > <h5> the purpose </h5> </Link>
                <Link to={`/howitworks`} > <h5> how it works </h5> </Link>
                <Link to={`/`} > <h5> home </h5> </Link>
              </div>
                <div>
                  < Footer />
                </div>
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('yes im being called')
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