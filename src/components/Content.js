import _ from "lodash";
import React, { Component } from "react";
import ModalContent from "./ModalContent";
import { PROJECTS } from "./Projects";

class Content extends Component {
  renderProjects(projects) {
    return _.map(projects, ({ title, description }) => {
      return (
        <ModalContent
          key={title}
          title={title}
          description={description}
          image={process.env.PUBLIC_URL + "/images/water.jpeg"}
        />
      );
    });
  }

  render() {
    return (
      <div className="ui link stackable two cards" style={{ margin: "1em" }}>
        {this.renderProjects(PROJECTS)}
        <ModalContent />
      </div>
    );
  }
}

export default Content;
