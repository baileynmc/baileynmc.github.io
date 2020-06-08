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
      title="Mastercard"
      category="Angular 5"
      description="During my time at Mastercard, I was paired with the My Company
      Manager team in the Digital Marketing & Loyalty department. I also spent time
      working on a service project for the International Institute in St. Louis."
    />
    <div className="projectContent">
      <h3>My Company Manager</h3>
      <p>
      The My Company Manager software allowed banks to manage the sets of BIN numbers
      that they owned. The technologies utilized include HTML/CSS Angular 5, Agular CLI, GIT
      Bash, and Node.js/NPM. I worked to implement a new screen in HTML/CSS in their main program.
      I also create an Angular library that included common UI/UX elements that they utilized
      in their system. </p>
      <h3>Service Project</h3>
      <p>
      Each summer Mastercard interns implement a project that utilizes interns&#39; skills
      and contributes to the community. We worked with the International Institute of St.
      Louis to create a website for their Festival of Nations event. They wanted us to created
      a Wordpress.org site so that they could modify it later on, but it was up to our ingenuity
      to implement features.</p>
      <p>We utilized a add-on called Elementor which would allow the employees of IISTL to
      drag-and-drop. We also implemented features such as a world map with clickable pins about the
      booths available for that country and a tool to translate the entire site. I also was in charge
      of creating a logo specifically for the Festival of Nations instead of the generic IISTL one.
      The process for this graphic design can be seen below.</p>
      <img src={require('./images/festivalofnations.png')} alt="festival of nations logo" className="prototype"/>
    </div>
    </div>
  )
}

export default Calenstar;
