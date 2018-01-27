import React from 'react';
import {  Route, 	Switch , Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='About'>
      <h1> - the purpose - </h1>
      <p> Make America Great wants to help Americans build temperature associations in celsius rather than farenheit. Make a guess based on the weather outside wherever you are -- the app knows your location and will give you a reading of the temperature in farenheit as a clue. </p>
      <Link to={`/`} > <h5> Home </h5> </Link>
	  <Link to={`/guesses`} > <h5> Guesses Log </h5> </Link>
    </div>
  )
}

export default About;