import React, { Component } from "react";
import { Markup } from "interweave";

import ModalContent from "./ModalContent";

class ModalGallery extends Component {
  renderProjects(projects) {
    return projects.map(({ title, description, image }) => {
      return (
        <ModalContent
          key={title}
          title={title}
          description={description ? <Markup content={description} /> : null}
          image={process.env.PUBLIC_URL + image}
        />
      );
    });
  }

  render() {
    return (
      <div className="ui two stackable link cards margin-1">
        {this.renderProjects(this.props.data)}
      </div>
    );
  }
}

export default ModalGallery;
