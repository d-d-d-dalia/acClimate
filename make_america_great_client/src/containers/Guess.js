import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Like from './Like'
import {addLike} from '../actions/Guesses'

class Guess extends Component {

  // constructor(props) {
  //   super(props)

  //   // this.state = {
  //   //   count: 0,
  //   // }
  // }

handleOnLike = () => {
	const likeInfo = {
      likes: this.props.guess.likes + 1,
      id: this.props.guess.id
    }
    console.log(likeInfo)
  this.props.addLike(likeInfo)
  // this.setState({count: this.state.count + 1})
}

callApi() {
  console.log('a')
  fetch(`http://localhost:3001/api/guesses`)
    .then((response) => {
      console.log('b')
      return response.json()
    })
    .then((data) => console.log("c", data))
    .catch((whatever) => console.log("d", whatever))
    console.log('e')

    // a e b c, data
}

  render() {
  	//this is so it knows wth guess is
  	const {guess} = this.props

    return (
      //****** guess is giving props to like component on like 36  *****
        <div key={guess.id}>
           <p> {guess.date} </p>
           <p> guess: {guess.guess} ~~ actual: {Math.round((guess.temperature -32) / 1.8)} </p>
           <button onClick={this.callApi}>Call Api</button>
           <Like handleOnLike={this.handleOnLike} likes={guess.likes}/>
        </div>
    )
  }
}

export default connect(null, {addLike})(Guess)