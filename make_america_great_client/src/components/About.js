import React from 'react';
import {  Route, 	Switch , Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='About'>
      <h1>About the app:</h1>
      <p>Make America Great is a simple React Redux frontend app, with a Rails backend, that aims to help Americans build temperature associations in celsius rather than farenheit. </p>
      <Link to={`/`} > <h5> Home </h5> </Link>
	  <Link to={`/guesses`} > <h5> Guesses Log </h5> </Link>
    </div>
  )
}

export default About;