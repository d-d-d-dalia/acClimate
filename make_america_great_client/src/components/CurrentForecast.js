import React from 'react';

const CurrentForecast = ({forecast: {temperature}}) => <div> <h1> Current Forecast: </h1>

		<div style={{ border: 'solid 1px blue', padding: '20px', margin: '20px' }}>
		<h3> Temperature: { temperature } farenheit </h3>
		</div>

	</div>

export default CurrentForecast