import React, { Component } from "react";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return <div className="container-fluid">{<NavBar />}</div>;
  }
}
