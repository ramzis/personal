import React from "react";
import { Grid } from "semantic-ui-react";

import Greeting from "./Greeting";
import Links from "./Links";

const Intro = () => {
  return (
    <Grid style={{ height: "100%" }}>
      <Grid.Row centered columns={1} style={{ height: "20%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "right",
            height: "100%"
          }}
        >
          <Links />
        </div>
      </Grid.Row>

      <Grid.Row centered columns={1} style={{ height: "80%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%"
          }}
        >
          <Greeting />
        </div>
      </Grid.Row>
    </Grid>
  );
};

export default Intro;
