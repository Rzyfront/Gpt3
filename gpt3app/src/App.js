import React from "react";
import "./App.css";
import { Nav, Brand, Cta } from "./components/components.js";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers/containers.js";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
