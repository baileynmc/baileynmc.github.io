import React from "react";
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import './css/Design.css';
import ProjectBullet from './ProjectBullet.js';

function Design(props) {
  return (
    <div className="design">
      <div className="header">
      <img src={require('./images/tideTalksRoosevelt3x2.png')} alt="Tide Talks 3 by 2" className="main"/>
      <div className="title">
        <h1>design</h1>
      </div>
      </div>
      <div className="designContent">
      <ProjectBullet
        link="/artion"
        image={require('./images/artionLogo.png')}
        title="Artion"
        category="App Prototype"
        description="A final class project to showcase the potential of prototyping through
        a fake mock up for an art auction app called Artion."
      />
      <ProjectBullet
        link="/calenstar"
        image={require('./images/CalenStarLogo.png')}
        title="Calenstar"
        category="App Prototype"
        description="A mockup for an app that would connect users' calendars and give them
        insights to the planetary alignments for specific events in their calendars."
      />
      <ProjectBullet
        link="/tide-talks"
        image={require('./images/vanGogh3x2.png')}
        title="Tide Talks"
        category="Graphic Design"
        description="The work that I did while serving as Director of Design for Tide Talks,
        a student organization dedicated to sharing revolutionary ideas."
      />
      </div>
    </div>
  )
}

export default Design;
