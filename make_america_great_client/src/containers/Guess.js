import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Like from './Like'
import {addLike} from '../actions/Guesses';

class Guess extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

handleOnLike = () => {
  this.setState({count: this.state.count + 1});
}

  render() {
  	//this is so it knows wth guess is
  	const {guess} = this.props

    return (
        <div key={guess.id}>
           <p> {guess.date} </p>
           <p> guess: {guess.guess} ~~ actual: {Math.round((guess.temperature -32) / 1.8)} </p>
           < Like handleOnLike={this.handleOnLike} like={this.props.guess.like}/>
        </div>
    )
  }
}

export default connect(null, {addLike})(Guess);