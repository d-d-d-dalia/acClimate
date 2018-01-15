import React, { Component } from 'react';
import './App.css'
import Scorerecords from './Scorerecords'

const APP_URL = process.env.REACT_APP_API_URL

class App extends Component {

	constructor (props) {
		super (props)

		this.state = {
			scorerecords: []
		}
	}

	componentDidMount() {
		fetch(`${APP_URL}/scorerecords`)
			.then(response => response.json())
			.then(scorerecords => this.setState({ scorerecords }))
	}
	
	render() {

		return (
			<div className="App">
				< Scorerecords scorerecords={this.state.scorerecords} />
			</div>
		)
	}
}

export default App;