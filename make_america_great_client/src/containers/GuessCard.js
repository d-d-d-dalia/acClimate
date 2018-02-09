// import { connect } from 'react-redux'
// import { guessesFetchData } from '../actions/Guesses'
// import React, { Component } from 'react'
// import {  Link } from 'react-router-dom'
// import { bindActionCreators } from 'redux'
// import Footer from '../components/Footer'
// import Home from '../components/Home'
// import Guesses from './Guesses'

// const checkGuess = (guess, temperature) => {
//     let temperatureC = (temperature - 32) / 1.8
//     let absoluteValue = Math.abs(guess - temperatureC)
//     return (absoluteValue <= 2 ? "YES!" : "NOPE")
// }

// const GuessCard = (props) => {

//   let modifiedGuesses = props ? props.guesses.map((guess, i) => {
//             return checkGuess(guess.guess, guess.temperature)
//         })
//         : []

//   return(

// 	props ? props.guesses.map((guess, i) =>
// 		<div key={i}>
// 			<p> {guess.date} </p>
//         	<p> {modifiedGuesses[i]} ~~ guess: {guess.guess} ~~ actual: {Math.round((guess.temperature -32) / 1.8)} </p>
//         	<button type="submit" onClick={(event) => props.handleOnClick(event)}> like </button> <p>{this.state.counter}</p>
//         // </div>
//         ) : 'uh oh' 
//   )
// }

// export default GuessCard
// export { checkGuess }