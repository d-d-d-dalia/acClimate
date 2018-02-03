import React from 'react';
import {  Link } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'

const howItWorks = () => {
  return (
    <div className='howItWorks'>
    < Home />
      <h1> - how it works - </h1>
      <p> acClimate is a React app using Redux middleware, connected to a Rails api backend. 
      it pulls temperature data for your current location using the darksky.net api. </p>

      <p> acClimate compares your guess to the actual temperature reading and evaluates it as true if it's within 2 degrees of accuracy.
      the guesses log records your guesses along with the actual temperature, for a side by side comparison. </p>
	  <Link to={`/guesses`} > <h5> guesses log </h5> </Link>
	  <Link to={`/about`} > <h5> the purpose </h5> </Link>
	  <Link to={`/`} > <h5> home </h5> </Link>
	   <div>
		< Footer />
	   </div>
    </div>
  )
}

export default howItWorks;