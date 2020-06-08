import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './css/ProjectHeader.css';

function ProjectHeader(props) {
  return (
    <div className="projectHeader">
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
        <div className="project-description">{props.description}</div>
    </div>
  )
}

export default ProjectHeader;
