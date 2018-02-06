import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp'
import CurrentForecast from '../components/CurrentForecast'
import {  Link } from 'react-router-dom'
import GuessesForm from './GuessesForm'
import Footer from '../components/Footer'
import Home from '../components/Home'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}`

class App extends Component {

	constructor (props) {
		super ()

		this.state = {
			fetchingData: true,
			weatherData: {}
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords

			fetchJsonp(`${APIURL}/${latitude},${longitude}`)
				.then(response => response.json())
				.then(weatherData => this.setState( {fetchingData: false, weatherData} ))
				.catch(error => console.error(error))
		})
	}

	render() {
		const { fetchingData, weatherData } = this.state
		console.log(fetchingData)
		console.log("weather data: ", weatherData)
		return (
			<div className="App">
			  < Home />
			  
			  <div className="App-intro">
			 { weatherData.currently ?  <CurrentForecast forecast={weatherData.currently} /> : "...LOADING...ONE SEC..." }
			  </div>
			  <div>
			  	< GuessesForm forecast={weatherData.currently} />
			  </div>
			  <div> 
			  	<Link to={`/guesses`} > <h5> guesses log </h5> </Link>
				<Link to={`/about`} > <h5> the purpose </h5> </Link>
				<Link to={`/howitworks`} > <h5> how it works </h5> </Link>
			  </div>
			  <div>
			    < Footer />
			  </div>
			</div>
		)
	}
}

export default App