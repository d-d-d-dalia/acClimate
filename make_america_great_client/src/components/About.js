import React from 'react';
import {  Link } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'

const About = () => {
  return (
    <div className='About'>
    < Home />
      <h1> - the purpose - </h1>
      <p> acClimate seeks to help you learn to associate the feel of the weather with celsius instead of farenheit, 
      thus making you a more competant global citizen. </p>
	  <Link to={`/guesses`} > <h5> guesses log </h5> </Link>
	  <Link to={`/howitworks`} > <h5> how it works </h5> </Link>
	  <Link to={`/`} > <h5> home </h5> </Link>
	   <div>
		< Footer />
	   </div>
    </div>
  )
}

export default About;