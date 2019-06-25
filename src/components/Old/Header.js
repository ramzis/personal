import React, { Component } from "react";
import Resume from "../documents/resume.pdf";
import IconButton from "./IconButton";

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="ui stackable menu">
        <div className="item">
          <a href="/">
            <h1 className="ui floated huge header">Tadas Audinis</h1>
          </a>
        </div>
        <div className="right menu">
          <div className="item">
            <IconButton
              url="https://github.com/ramzis"
              color="github"
              icon="github"
              label="Github"
            />
          </div>
          <div className="item">
            <IconButton
              url="https://www.linkedin.com/in/tadas-audinis/"
              color="linkedin"
              icon="linkedin"
              label="LinkedIn"
            />
          </div>
          <div className="item">
            <IconButton
              url="mailto:t.audinis@gmail.com"
              color="blue"
              icon="envelope"
              label="Contact"
            />
          </div>
          <div className="item">
            <IconButton
              url={Resume}
              color="green"
              icon="alternate outline file"
              label="Resume"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
