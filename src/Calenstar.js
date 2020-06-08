import React from "react";
import Thumbnail from './Thumbnail.js';
import ProjectHeader from './ProjectHeader.js';
import Button from './Button.js';
import './css/App.css';
import './css/Projects.css';

function Calenstar(props) {
  return (
    <div className="Projects">
    <ProjectHeader
      title="Calenstar"
      category="App Prototype"
      description="One of my personal hobbies/interests is astrology. Many of the
      current astrology apps are focused on telling you a horoscope for the day or
      what your birth chart means. I wanted to create a mockup for an app that would
      connect users' calendars and give them insights to the planetary alignments
      for specific events in their calendars. I designed the interface in Photoshop
      and made a prototype in InVision."
    />
    <div className="projectContent">
      <h3>Logo</h3>
      <p>
      My process for this logo was to make a fun and quirky design that also
      implemented the symbolism of the moon and star.</p>
      <img src={require('./images/CalenStarLogo.png')} alt="Calenstar logo" width="1986px"
      height="1175px" className="logo"></img>
      <h3>Screens</h3>
      <p>I created the screens for this app utilizing Photoshop, and I implemented imagery
      of the sky and stars throughout the prototype. From the landing, users could choose
      to see the current alignments of the sky or the alignments for one of their upcoming
      events. It would also inlclude a friend functionality that allowed calendar sharing
      simliar to other poular calendar apps.</p>
      <img src={require('./images/calenstarLanding.png')} alt="landing" width="1125px"
      height="2440px" className="project"></img>
      <img src={require('./images/calenstarHome.png')} alt="home" width="1125px"
      height="2440px" className="project"></img>
      <img src={require('./images/calenstarFriends.png')} alt="friends" width="1125px"
      height="2440px" className="project"></img>
      <h3>Prototype</h3>
      <p>For this class, we were required to create our prototype on the InVision web app.
      I originally assumed it would have the same push up functionality of Adobe XD, so the
      launch screens for the app are slightly off.</p>
      <Button
      link="https://projects.invisionapp.com/share/ADR98WUNHS8#/screens"
      text="View Prototype"
      />
    </div>
    </div>
  )
}

export default Calenstar;
