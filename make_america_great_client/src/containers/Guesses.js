//if this becomes responsible for updating the scorerecords, then it could be considered a container component

import React from 'react';

const Guesses = (props) => (
	<div className="Guesses Container">
		<h1> Guesses </h1>
	{props.guesses.map((guess, i) =>
		<div className="GuessCard" key={i} >
			<p> {guess.date} </p>
			<p> {guess.guess} </p>
		</div>
		)}
	</div>
)

export default Guesses;