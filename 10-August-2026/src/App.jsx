import React from "react";
import "./App.css";
import ReactIntro from "./Components/ReactIntro";
import Page from "./Page";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <ReactIntro></ReactIntro>
      <Page></Page>
    </>
  );
}

export default App;
