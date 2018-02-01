import React from 'react';
import {  Link } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
  return (
    <div className='About'>
      <h1> - the purpose - </h1>
      <p> Help yourself learn to think in celsius. Each day, venture a celsius guess based on how the weather feels outside. Make America Great will keep track of how many guesses you get right! </p>
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