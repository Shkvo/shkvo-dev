import React from 'react';
import './css/Content.css';
import beardMan from './img/beard-man.jpg'

const Content = () => (
    <section>
        <div className="about-block">
            <div className="beard-man">
                <img src={beardMan} alt="a" />
                <div className="beard-man-overlay"></div>
            </div>
            <div className="about-text">
                <h1>Hi, i'm Dima,</h1>
                <span>a frontend developer.</span>
            </div>
        </div>
    </section>
)

export default Content;