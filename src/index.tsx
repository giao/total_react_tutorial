import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import { CustomDate } from './custom-date';
 
ReactDOM.render(
	<div>
		<Header text="Your mama" />
		<Header text="Ta mère en bikini" />
		<CustomDate />
		<p>this is a paragraph</p>
		<a href="#">Click me</a>
	</div>,
	document.querySelector('#root'),
)