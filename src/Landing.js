import React from "react";
import './css/Landing.css';
import Thumbnail from './Thumbnail.js';
import './css/App.css';

function Landing(props) {
  return (
    <div className="Landing">
      <h2><b>Bailey McIntosh</b> is an aspring UI/UX designer & avid artist.</h2>
      <img src={require('./images/creativeHeadshot.jpg')} alt="me" className="headshot"></img>
    <div className="content">
      <div className="thumbnails">
        <Thumbnail
          link="/calenstar"
          image={require('./images/CalenStarLogo.png')}
          title="Calenstar"
          category="App Prototype"
        />
        <Thumbnail
          link="/artion"
          image={require('./images/artionLogo.png')}
          title="Artion"
          category="App Prototype"
        />
        <Thumbnail
          link="/tide-talks"
          image={require('./images/tideTalksRoosevelt3x2.png')}
          title="Tide Talks"
          category="Graphic Design"
        />
        <Thumbnail
          link="/running-water"
          image={require('./images/runningWaterProtoClick.gif')}
          title="Running Water"
          category="Web Prototype & Development"
        />
      </div>
    </div>
    </div>
  )
}

export default Landing;
