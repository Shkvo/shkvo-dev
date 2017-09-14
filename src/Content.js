import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import About from'./About';
import Projects from './Projects';
import Contact from './Contact';
import './css/Content.css';
import beardMan from './img/beard-man.jpg'

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