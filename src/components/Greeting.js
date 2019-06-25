import React from "react";
import Typewriter from "typewriter-effect";

const roles = [
  "Software Engineer",
  "Game Developer",
  "Pythonista",
  "Creative Person",
  "Musician"
];

const Greeting = () => {
  return (
    <div>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "5vh"
        }}
      >
        Hello, I'm Tadas.
      </h1>
      <h1
        id="white"
        style={{
          fontSize: "5vh",
          height: "12vh"
        }}
      >
        I am a&nbsp;
        <Typewriter options={{ autoStart: true, loop: true, strings: roles }} />
      </h1>
    </div>
  );
};

export default Greeting;
