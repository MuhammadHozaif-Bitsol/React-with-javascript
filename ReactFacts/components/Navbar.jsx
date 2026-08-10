import React from "react";
import reactLogo from "../src/assets/react.svg";
export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <img src={reactLogo} alt="react logo" />
          <span>ReactFacts</span>
        </nav>
      </header>
    </>
  );
}
