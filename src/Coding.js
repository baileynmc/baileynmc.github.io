import React from "react";
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import './css/Design.css';
import ProjectBullet from './ProjectBullet.js';

function Coding(props) {
  return (
    <div className="design">
      <div className="header">
      <img src={require('./images/coding.png')} alt="coding" className="main"/>
      <div className="title">
        <h1>coding</h1>
      </div>
      </div>
      <div className="designContent">
      <ProjectBullet
        link="/portfolio"
        image={require('./images/portfolioHome.png')}
        title="Portfolio"
        category="React JSX"
        description="I coded all of the React elements and CSS for this portfolio!"
      />
      <ProjectBullet
        link="/running-water"
        image={require('./images/runningWaterProtoClick.gif')}
        title="Running Water"
        category="Web Prototype & Development"
        description="For my senior project for my degree, I created an end-to-end website for a
        poetry collection that I wrote. I went through multiples stages: design, prototype, usability
        testing, and development."
      />
      <ProjectBullet
        link="/internships"
        image={require('./images/mastercard.JPG')}
        title="Internships"
        category="React & Angular Development"
        description="Information about the work I did while I was an intern at Mastercard and Bettercloud."
      />
      </div>
    </div>
  )
}

export default Coding;
