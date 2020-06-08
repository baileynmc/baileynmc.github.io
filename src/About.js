import React from "react";
import './css/About.css';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

function About(props) {
  return (
    <div className="About">
      <img src={require('./images/IMG_6996.jpg')} alt="me"></img>
    <div className="content">
      <div className="profileLinks">
        <ul>
          <li><a href="bailey-resume.pdf">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/bailey-mcintosh-97787a13b/">LinkedIn</a></li>
          <li><a href="mailto:baileynmcintosh@gmail.com">Email</a></li>
          <li><a href="https://dribbble.com/baileynmc">Dribbble</a></li>
          <li><a href="https://github.com/baileynmc">Github</a></li>
        </ul>
      </div>
      <h3>Hi there! I graduated in May 2020, and I am searching for a job as a UI/UX designer,
      front-end developer, or web developer.</h3>
      <img src={require('./images/IMG_6215.png')} alt="me" className="washiPic"></img>
      <h4>Some of my interests include...</h4>
      <h5>Poetry.</h5>
      <p>When I was in highschool, I wrote and self published a collection of poetry.
      Poetry continues to serve as a powerful way for me to express my emotions & experiences.
      For my senior project, I wrote a collection of poetry and created a prototype, usability
      survey, and website for it. Check it out <Link to="/runnning-water">here</Link>!</p>
      <h5>Global internet accessibility and censorhip.</h5>
      <p>My junior year of college I completed a literature review on the state of internet
      censorship. I looked at materials from sources like the <a href="https://freedomhouse.org/report/freedom-net">
      Freedom on the Net</a> reports. As the internet grows in importance to everyday functions,
      this continues to be a passion of mine.</p>
      <h5>Astrology.</h5>
      <p>Personality tests have always been an interest of mine, but I believe that astrology
      is a powerful tool to reflect on all aspects of ones&#39; life from romance, to communication,
      to an inner self. I am a cancer sun, sagitarrius moon, and sagitarrius rising! The stars can
      also impact our daily life; check out the <Link to="/calenstar">app prototype</Link> I made related
      to this.</p>
      <h5>Giving people a platform to share their ideas.</h5>
      <p>Throughout all of college, I was on the exec board for an organization called Tide Talks,
      our school spin-off of TEDTalks. It was founded on the idea that many students have revolutionary
      ideas that they do not have a space to share. Make sure to see the <Link to="/tide-talks">work</Link> that
      I did as the graphic designer.</p>
    </div>
    </div>
  )
}

export default About;
