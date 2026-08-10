import React from "react";
import reactLogo from "../assets/react.svg";

function ReactIntro() {
  return (
    <>
      <img src={reactLogo} width="40px" alt="React logo" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li> Was originally created by jorand walke</li>
        <li>Has well over 100k stars on github</li>
        <li>Is maintained by meta</li>
        <li>Powers thousands of enterprise Apps including mobile apps</li>
      </ul>
    </>
  );
}

export default ReactIntro;
