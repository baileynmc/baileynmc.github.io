import React from "react";
import Thumbnail from './Thumbnail.js';
import ProjectHeader from './ProjectHeader.js';
import Button from './Button.js';
import './css/App.css';
import './css/Projects.css';

function Artion(props) {
  return (
    <div className="Projects">
    <ProjectHeader
      title="Artion"
      category="App Prototype"
      description="This was a final project for a class on creativity and computers.
      I wanted to showcase the potential of prototyping through a fake mock up for an
      art auction site called Artion. I made every element of the app in Adobe
      Illustrator and mocked up the functionality using Adobe XD."
    />
    <div className="projectContent">
      <h3>Logo</h3>
      <p>
      My process for the logo was to utilize a clean and simple font that would integrate
      well on the smaller screens of app. I wanted to include some imagery, which was done
      by making the "A" and its accompanying shape resemble an art easel.</p>
      <img src={require('./images/artionLogo.png')} alt="Artion logo" width="1986px"
      height="1175px" className="logo"></img>
      <h3>Screens</h3>
      <div className="alignTop">
      <img src={require('./images/artion/WatchList.png')} alt="landing" className="project"/>
      <img src={require('./images/artion/ProfilePageSelf.png')} alt="landing" className="project"/>
      <img src={require('./images/artion/ArtPost.png')} alt="landing" className="project"/>
      </div>
      <h3>Prototype</h3>
      <p>I created this prototype utilizing Adobe XD and showcased the prototype for my
      final presentation for the class.</p>
      <img src={require('./images/artion/artionPrototype.gif')} alt="proto" className="project"/>
    </div>
    </div>
  )
}

export default Artion;
