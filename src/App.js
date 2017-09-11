import React, { Component } from 'react';
import logo from './Shkvo.svg';
import { Link ,Switch, Route } from 'react-router-dom';
import './css/keyframes.css';
import './css/fonts.css';
import './css/App.css';

class App extends Component {
  render() {
		return (
			<div className="App">
					<object id="f1" data={logo} type="image/svg+xml" aria-label="logo"></object>
			</div>
		);
  }
}

export default App;
