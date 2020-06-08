import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './css/ProjectBullet.css';

function ProjectBullet(props) {
  return (
    <div className="project-bullet">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="info">
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
          <div className="project-description">{props.description}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectBullet;
