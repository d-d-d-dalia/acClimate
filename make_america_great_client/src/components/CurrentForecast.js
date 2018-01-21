import React from 'react';

const CurrentForecast = ({forecast: {temperature}}) => <div> CurrentForecast 

		<h2> Current Temperature </h2>
		<div style={{ border: 'solid 1px blue', padding: '20px', margin: '20px' }}>
		<h3> {temperature} </h3>
		</div>
	</div>

export default CurrentForecast