import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp'
import Guesses from './Guesses'
import CurrentForecast from '../components/CurrentForecast'

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
			  <div className="App-header">
			    <h2> Weather App </h2>
			  </div>
			  <p className="App-intro">
			 { weatherData.currently ?  <CurrentForecast forecast={weatherData.currently} /> : "" }
			  </p>
			</div>
		)
	}
}

export default App