import React from 'react';

const Scorerecords = (props) => (
	<div className="Scorerecords Container">
		<h1> Scorerecords Component </h1>
	{props.scorerecords.map(scorerecord =>
		<div className="ScorerecordCard" >
			<h3> {scorerecord.username} </h3>
			<p> {scorerecord.wrong_guesses} </p>
			<p> {scorerecord.right_guesses} </p>
		</div>
		)}
	</div>
)

export default Scorerecords;