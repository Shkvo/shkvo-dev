import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from'./About';
import Projects from './Projects';
import Contact from './Contact';
import './css/Content.css';

const Content = () => (
    <section>
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </section>
)

export default Content;