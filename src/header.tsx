import * as React from 'react';

type HeaderProps = {
	text: string
}

function Header(props : HeaderProps) {
	return(
		//<h1 style={{ color: "pink" }}>{props.text}</h1>
		<h1 className="primary-header">{props.text}</h1>
	)
}

export {
	Header
}