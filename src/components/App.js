import React, { Component } from "react";

import Intro from "./Intro";
import Portfolio from "./Portfolio";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui vertical basic segment section-first">
          <Intro />
        </div>
        <div className="ui vertical basic segment">
          <Portfolio />
        </div>
        <div className="ui vertical basic segment short-segment" id="about">
          <h1 className="ui center aligned header">About me</h1>
          <ul>
            <li>
              I'm enthusiastic about making fun experiences and collaborating
              with like-minded people
            </li>
            <li>I am most experienced in using C#, Python & Unity</li>
            <li>I enjoy learning new tools, frameworks and paradigms</li>
          </ul>
        </div>
        <footer className="ui centered container margin-1">
          <div className="ui section divider" />
          <h4>
            Made with <i className="heart icon" /> by Tadas Audinis
          </h4>
        </footer>
      </div>
    );
  }
}

export default App;
