import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './css/Button.css';

function Button(props) {
  return (
    <div className="button">
      <a href={props.link}>
        <div className="button-text">{props.text}</div>
      </a>
    </div>
  )
}

export default Button;
