import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';

ReactDOM.render(
	<div>
		<Header text="Your mama" />
		<Header text="Ta mère en bikini" />
		<p>this is a paragraph</p>
		<a href="#">Click me</a>
	</div>,
	document.querySelector('#root'),
)