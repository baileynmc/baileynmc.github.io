import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Landing from './Landing.js';
import Design from './Design.js';
import Coding from './Coding.js';
import Illustration from './Illustration.js';
import About from './About.js';
import TideTalks from './TideTalks.js';
import Calenstar from './Calenstar.js';
import Artion from './Artion.js';
import ScrollToTop from './ScrollToTop.js';
import RunningWater from './RunningWater.js';
import Internships from './Internships.js';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Route path="/landing" component={Landing} />
        <Route path="/design" component={Design} />
        <Route path="/coding" component={Coding} />
        <Route path="/illustration" component={Illustration} />
        <Route path="/about" component={About} />
        <Route path="/tide-talks" component={TideTalks} />
        <Route path="/calenstar" component={Calenstar} />
        <Route path="/artion" component={Artion} />
        <Route path="/running-water" component={RunningWater} />
        <Route path="/internships" component={Internships} />




        <div className="navigation">
          <ul>
          <li><NavLink to="/landing" className="item" activeStyle={{color: "1a1831"}} >Home</NavLink></li>
          <li><NavLink to="/design" className="item" activeStyle={{color: "1a1831"}} >Design</NavLink></li>
          <li><NavLink to="/coding" className="item" activeStyle={{color: "1a1831"}} >Coding</NavLink></li>
          <li><NavLink to="/illustration" className="item" activeStyle={{color: "1a1831"}} >Illustration</NavLink></li>
          <li><NavLink to="/about" className="item" activeStyle={{color: "1a1831"}} >About</NavLink></li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
