import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Intro from "./Intro";
import Content from "./Content";

class App extends Component {
  state = { portfolioView: 0 };

  renderPortfolioView() {
    switch (this.state.portfolioView) {
      case 1:
        return <Content />;
      default:
        return <Intro />;
    }
  }

  renderPortfolio() {
    return (
      <div
        className="ui vertical basic segment"
        style={{ backgroundColor: "#FFFAEF" }}
      >
        <div style={{ padding: "3em 0em 1em 0em", margin: 0 }}>
          <h1 className="ui center aligned header">Portfolio</h1>
        </div>
        <hr />
        <div className="ui two top attached buttons">
          <div
            className={
              "ui white basic button " +
              (this.state.portfolioView === 0 ? "active" : null)
            }
            onClick={() => this.setState({ portfolioView: 0 })}
          >
            Programs
          </div>
          <div
            className={
              "ui white basic button " +
              (this.state.portfolioView === 1 ? "active" : null)
            }
            onClick={() => this.setState({ portfolioView: 1 })}
          >
            Models
          </div>
        </div>
        <div className="ui basic padded container margin-1">
          <div className="ui container">{this.renderPortfolioView()}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui vertical basic segment section-first">
          <Intro />
        </div>
        {this.renderPortfolio()}
        <footer className="ui footer">
          <p>Tadas Audinis 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
