import React from "react";
import ProjectHeader from './ProjectHeader.js';
import Button from './Button.js';
import './css/Projects.css';

function RunningWater(props) {
  return (
    <div className="Projects">
    <ProjectHeader
      title="Running Water"
      category="Web Prototype & Development"
      description="For my senior project for my degree, I created an end-to-end website for a
      poetry collection that I wrote. I went through multiples stages: design, prototype, usability
      testing, and development."
    />
    <div className="projectContent">
      <h3>Premise</h3>
      <p>
      My degree was an interdisciplinary study of the ways that design & development are integral
      to each other. The program emphasizes interdisciplinary skills. For my senior project, I
      created a website for a poetry collection I had written.
      <br/><br/>In the publishing field, online forms of writing are typically looked down upon. I wanted
      to create a lyout with the potential to expose a broader audience to poetry. The project engaged
      knowledge from literature, graphic design, psychology, human-computer interaction, and computer
      programming.</p>
      <h3>Design</h3>
      <p>I made the initial mockups for the screens in Adobe Illustrator, but finished fleshing out
      the prototype in Adobe XD. The collections central theme was on water and change, so I integrated a
      cool color scheme throughout. I also included pagination once users started reading the poetry to
      associate the feel of a book.</p>
      <img src={require('./images/home.png')} alt="home" width="1920px"
      height="1080px" className="screen"/>
      <img src={require('./images/statement.png')} alt="statement of poetics" width="1920px"
      height="1080px" className="screen"/>
      <img src={require('./images/aboutMe.png')} alt="about me" width="1920px"
      height="1080px" className="screen"/>
      <img src={require('./images/manicure.png')} alt="poem" width="1920px"
      height="1080px" className="screen"/>
      <h3>Prototype</h3>
      <p>I utilized Adobe XD to finish the design and use the elements on the screen to create hotspots
      to link together the functionality of the website. The prototype was a stepping stone on the way
      to web development and sent out to users for feedback.</p>
      <img src={require('./images/runningWaterProtoClick.gif')} alt="prototype" width="1920px"
      height="1080px" className="prototype"/>
      <h3>Usability Testing</h3>
      <p>It was an important aspect of my project to integrate usability testing. I wanted to make sure the
      final product engaged with users in a meaningful way. Although I orginally planned to do an in personal
      focus group, I shifted to a Google survey because of COVID-19. The following is information of the
      responses and feedback I received on the prototype I included in the survey.</p>
      <p>I included a pre-survey for people to take before interacting with the prototype and a post-survey for
      feedback. The pre-survey was mainly used to gather demographic information (age, time spent using technology, etc.),
      so I could get a better understand of who my users were.</p>
      <img src={require('./images/presurvey.png')} alt="prototype survey" width="2592px"
      height="1406px" className="screen"/>
      <img src={require('./images/postsurvey.png')} alt="prototype survey" width="2592px"
      height="1406px" className="screen"/>
      <p>The post-survey gave me a lot of helpful feedback about what features users liked and where they struggled.
      It was also uplifting to hear what survey takers thought the impact of the project could be. One survey
      taker said:</p>
      <blockquote>
      It's really easy to navigate through. Sometimes it's difficult to find authentic poetry. There are
      those sites that list about 50 various poems about a certain topic, but those poems are out of context.
      I like how this site is a whole poetry collection, each poem being part of a whole.
      </blockquote>
      <p>Overall, the feedback I received was very positive, but some of the pain points included not having a link to
      the home page in the TOC and wanting the option to close the TOC upon reading. Both of these functionalities were
      implemented into the final product.</p>
      <h3>Web Development</h3>
      <p>I used the feedback from my usability survey to alter a few features in the final product. I developed
      in pure HTML/CSS. You can check out the final web product or download the collection as a zine here!</p>
      <Button
      link="https://runningwaterdemo.imfast.io/"
      text="View Web Product"
      />
      <Button
      link="https://alabama.app.box.com/s/93ac52k97r55oh2ptxf004nyy4ovbzdj"
      text="Download Zine"
      />
    </div>
    </div>
  )
}

export default RunningWater;
