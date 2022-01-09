import React from "react";

import about from "./about.css";

export class About extends React.Component {
  render() {
    return (
      <iframe
        src={"http://127.0.0.1:5500/my-app/src/about/slider/index.html"}
      />
    );
  }
}
