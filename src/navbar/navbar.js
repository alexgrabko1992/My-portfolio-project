import React from "react";
import navbarstyle from "./navbarstyle.css";

export class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <nav class="top-menu">
          <ul class="menu-main">
            <li>
              <a href="#home" class="current">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
