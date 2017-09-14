import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './css/keyframes.css';
import './css/fonts.css';


class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Content />
			</div>
		);
	}
}

export default App;
