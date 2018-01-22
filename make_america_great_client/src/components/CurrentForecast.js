import React from 'react';

const CurrentForecast = ({forecast: {temperature}}) => <div>

		<div style={{ border: 'solid 1px blue', padding: '20px', margin: '20px' }}>
		<h2> Current Temperature: </h2>
		<h3> { temperature } &#176; farenheit </h3>
		</div>

	</div>

export default CurrentForecast