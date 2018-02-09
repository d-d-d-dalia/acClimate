import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

  	const {guess} = this.props

    return (
        <div key={guess.id}>
           <p> {guess.date} </p>
           <p> guess: {guess.guess} ~~ actual: {Math.round((guess.temperature -32) / 1.8)} </p>
           <button type="submit" onClick={(event) => this.handleOnLike(event)}> like {this.state.count} </button> 
        </div>
    )
  }
}

export default Guess