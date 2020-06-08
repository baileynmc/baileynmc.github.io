import React from "react";
import Thumbnail from './Thumbnail.js';
import ProjectHeader from './ProjectHeader.js';
import './css/App.css';
import './css/Projects.css';

function TideTalks(props) {
  return (
    <div className="Projects">
    <ProjectHeader
      title="Tide Talks"
      category="Graphic Design"
      description="Tide Talks is a student organization dedicated to promoting
      revolutionary ideas. Our events are a spinoff of TEDTalks and share the ideas
      of students from all different backgrounds and fields. My final year on exec,
      I served as Director of Design. In previous years, I served as VP of Content
      and Director of Marketing."
    />
    <div className="projectContent">
      <h3>Posters</h3>
      <p>For each of our events, we chose three revolutionary figures from a
      variety of fields. These figureheads and their quotes are used to create
      posters and graphics to promote the event.</p>
      <img src={require('./images/janelleTideTalks30.png')} alt="posterOfJanelle" width="1100px" height="1700px" className="project"></img>
      <img src={require('./images/obamaTideTalks30.png')} alt="posterOfObama" width="1100px" height="1700px" className="project"></img>
      <img src={require('./images/meghanTideTalks30.png')} alt="posterOfMeghan" width="1100px" height="1700px" className="project"></img>
      <img src={require('./images/tideTalks28Eleanor.png')} alt="posterOfEleanor" width="1100px" height="1700px" className="project"></img>
      <img src={require('./images/tideTalks28Edison.png')} alt="posterOfEdison" width="1100px" height="1700px" className="project"></img>
      <img src={require('./images/tideTalks28Zendaya.png')} alt="posterOfZendaya" width="1100px" height="1700px" className="project"></img>
      <h3>Cover Photos</h3>
      <p>Our branding and marketing process included making Facebook cover photos for people to change prior
      to the event.</p>
      <img src={require('./images/vanGoghCoverPhoto.png')} alt="coverPhotoVanGogh" width="3546px"
      height="1313px" className="coverPhoto"></img>
      <img src={require('./images/anneCoverPhoto.png')} alt="coverPhotoAnneFrank" width="3546px"
      height="1313px" className="coverPhoto"></img>
      <img src={require('./images/lizzoCoverPhoto.png')} alt="coverPhotoLizzo" width="3546px"
      height="1313px" className="coverPhoto"></img>
      <h3>Other Graphics</h3>
      <p>I was also in charge of creating a variety of other graphics including promotional
      materials for fundraisers, speaker pics, and save the date.</p>
      <img src={require('./images/norrisSpeakerPhoto.png')} alt="speakerPhotoNorris" width="2000px"
      height="2000px" className="square"></img>
      <img src={require('./images/mooyahSquare.png')} alt="mooyahPromo" width="2000px"
      height="2000px" className="square"></img>
      <img src={require('./images/NominationGraphicBlue.png')} alt="blueNomination" width="2000px"
      height="2000px" className="square"></img>
      <img src={require('./images/saveTheDate.png')} alt="saveTheDate28" width="2000px"
      height="2000px" className="square"></img>
      <img src={require('./images/saveTheDateFINAL.png')} alt="saveTheDate29" width="2000px"
      height="2000px" className="square"></img>
    </div>
    </div>
  )
}

export default TideTalks;
