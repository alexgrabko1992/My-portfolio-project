import React from "react";
import ReactDOM from "react-dom";

import index from "./index.css";

import { NavBar } from "./navbar/navbar";
import { Home } from "./home/home";
import { About } from "./about/about";

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container" id="home">
          <Home />
        </div>
        <div className="container" id="about">
          <About />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("app"));
