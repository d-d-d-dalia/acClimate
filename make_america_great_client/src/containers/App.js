import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp'
import Guesses from './Guesses'
import CurrentForecast from '../components/CurrentForecast'
import {  Route, 	Switch , Link } from 'react-router-dom'
import GuessesForm from './GuessesForm'


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
			    <h1> Make America Great </h1>
			    <h3> one degree at a time </h3>
			  </div>
			  
			  <div className="App-intro">
			 { weatherData.currently ?  <CurrentForecast forecast={weatherData.currently} /> : "" }
			  </div>
			  <div> 
			  	<Link to={`/guesses`} > <h5> Guesses Log </h5> </Link>
				<Route path="/guesses" component={ Guesses } />
				<Link to={`/`} > <h5> Home </h5> </Link>
				<Link to={`/about`} > <h5> About </h5> </Link>
			  </div>
			  <div>
			    < GuessesForm />
			  </div>
			</div>
		)
	}
}

export default App