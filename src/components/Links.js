import _ from "lodash";
import React, { Component } from "react";
import Resume from "../documents/resume.txt";
import { Button, Icon } from "semantic-ui-react";

const LINKS = [
  {
    url: "https://github.com/ramzis",
    icon: "github",
    color: "yellow",
    label: "Github"
  },
  {
    url: "https://www.linkedin.com/in/tadas-audinis/",
    icon: "linkedin",
    color: "green",
    label: "LinkedIn"
  },
  {
    url: "mailto:t.audinis@gmail.com",
    icon: "envelope",
    color: "red",
    label: "Contact"
  },
  {
    url: { Resume },
    icon: "alternate outline file",
    color: "blue",
    label: "Resume"
  }
];

class Links extends Component {
  renderButtons(buttons) {
    return _.map(buttons, ({ url, icon, color, label }) => {
      return (
        <Button animated="fade" color="white" key={label}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button.Content visible>
              <Icon name={icon} />
            </Button.Content>
            <Button.Content hidden>{label}</Button.Content>
          </a>
        </Button>
      );
    });
  }

  render() {
    return (
      <div>
        <Button.Group className="small">
          {this.renderButtons(LINKS)}
        </Button.Group>
      </div>
    );
  }
}

export default Links;
