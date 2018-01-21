import React from 'react';

const CurrentForecast = ({forecast: {temperature}}) => <div> Current Forecast:

		<h5> Current Temperature: </h5>
		<div style={{ border: 'solid 1px blue', padding: '20px', margin: '20px' }}>
		<h3> {temperature} </h3>
		</div>

	</div>

export default CurrentForecast