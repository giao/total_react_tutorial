import * as React from 'react';

function CustomDate() {
	let date : string = "";

	let getDate = () => {
		date = new Date().toDateString();
		alert(date);
	}
	return (
		<div>
			<button onClick={getDate}>Get The Date</button>
		</div>
	)
}

export {
	CustomDate
}