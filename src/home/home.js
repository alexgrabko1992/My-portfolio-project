import React from "react";

import home from "./home.css";
import myPhoto from "../img/my-photo.jpg";

export class Home extends React.Component {
  render() {
    return (
      <div id="home-content">
        <img src={myPhoto} alt="My personal photo" width="34.5%" />
        <div id="greeting">
          <p>Hello I am Alex Grabko, I am a beginner Front-End developer</p>
        </div>
      </div>
    );
  }
}
