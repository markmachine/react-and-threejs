import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import logo from './logo.svg';
import './App.css';
import scene from "./threejs.scene.js"

class App extends Component {
  componentDidMount() {
    scene(this);
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

export default App;
