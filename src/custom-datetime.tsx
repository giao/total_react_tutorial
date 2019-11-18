import * as React from 'react';

function CustomTime() {
	let [time, setTime] = React.useState("");

	let getTime = () => {
		setTime(new Date().toTimeString());
	}

	return (
		<div>
			{time}
			<button onClick={getTime}>Get the Time</button>
		</div>
	)
}

export {
	CustomTime
}