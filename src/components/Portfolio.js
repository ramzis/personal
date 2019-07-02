import React, { Component } from "react";
import ModalGallery from "./ModalGallery";
import { PROJECTS } from "./Projects";
import { MODELS } from "./Models";

class Portfolio extends Component {
  state = { portfolioView: 0 };

  renderPortfolioView() {
    switch (this.state.portfolioView) {
      case 1:
        return <ModalGallery data={MODELS} />;
      default:
        return <ModalGallery data={PROJECTS} />;
    }
  }

  render() {
    return (
      <div>
        <div style={{ padding: "3em 0em 3em 0em", margin: 0 }}>
          <h1 className="ui center aligned header">Portfolio</h1>
        </div>
        <div className="ui two top attached buttons">
          <button
            className={
              "ui white basic large button " +
              (this.state.portfolioView === 0 ? "active" : null)
            }
            onClick={() => this.setState({ portfolioView: 0 })}
          >
            <i className="mobile alternate icon" />
            Apps
          </button>
          <button
            className={
              "ui white basic large button " +
              (this.state.portfolioView === 1 ? "active" : null)
            }
            onClick={() => this.setState({ portfolioView: 1 })}
          >
            <i className="cube icon" />
            3D Models
          </button>
        </div>
        <div className="ui basic very padded segment">
          {this.renderPortfolioView()}
        </div>
      </div>
    );
  }
}

export default Portfolio;
