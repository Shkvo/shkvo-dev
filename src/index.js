import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import './css/index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
