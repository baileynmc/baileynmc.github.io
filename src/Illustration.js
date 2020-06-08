import React from "react";
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import './css/Design.css';
import ProjectBullet from './ProjectBullet.js';

function Illustration(props) {
  return (
    <div className="design">
      <div className="header">
      <img src={require('./images/ROYALTY2x3.jpg')} alt="Royalty Illustration" className="main"/>
      <div className="title">
        <h1>illustration</h1>
      </div>
      </div>
      <div className="designContent">
      <h1>Examples to Come</h1>
      </div>
    </div>
  )
}

export default Illustration;
