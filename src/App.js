import React, { Component } from "react";
import NavBar from "./NavBar";
import Teams from "./Teams";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {<NavBar />}
        {<Teams />}
      </div>
    );
  }
}
