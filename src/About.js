import React from 'react';
import './css/Content.css';
import beardMan from './img/beard-man.jpg'

const About = () => (
    <div className="about-block">
        <div className="beard-man">
            <img src={beardMan} alt="a" />
            <div className="beard-man-overlay"></div>
        </div>
        <div className="about-text">
            <h1>Hi, I'm Dima,</h1>
            <span>a frontend developer.</span>
            <p>
                I'm from Lviv, Ukraine. I study at National University "Lviv Politechnic" on computer science. 
                I chose the frontend, because I like to create interactive user interfaces, and, in general, 
                I like to create something beautiful.<br/><b>React</b> and everything connected with it helps me in this.
            </p>
        </div>
    </div>
)

export default About;