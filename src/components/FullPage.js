import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ReactFullpage from "@fullpage/react-fullpage";

import Links from "./Links";
import Greeting from "./Greeting";
import Content from "./Content";

class FullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      normalScrollElements: ".noscroll",
      responsive: false,
      fullpages: [
        {
          text: "section 1"
        },
        {
          text: "section 2"
        },
        {
          text: "section 3"
        }
      ]
    };
  }

  afterLoad = (origin, destination, direction) => {
    console.log(this.state);
  };

  renderPageOne(fullpageApi) {
    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row centered columns={1} style={{ height: "50%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: "100%"
            }}
          >
            <Greeting />
            <Links />
          </div>
        </Grid.Row>
        <Grid.Row centered columns={1} style={{ height: "40%" }}>
          <footer
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: "100%"
            }}
          >
            <div onClick={() => fullpageApi.moveSectionDown()}>
              <h1>Portfolio</h1>
              <h1>\/</h1>
            </div>
          </footer>
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    return (
      <ReactFullpage
        afterLoad={this.afterLoad}
        debug
        navigation
        anchors={["firstPage", "secondPage", "thirdPage"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section">
                {this.renderPageOne(fullpageApi)}
              </section>
              <section className="section">
                <Content />
              </section>
              <section className="section">
                <div className="noscroll">
                  <div className="">
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                    <div className="ui item" style={{ height: "200px" }}>
                      item
                    </div>
                  </div>
                </div>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default FullPage;
