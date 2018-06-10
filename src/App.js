import React, { Component } from 'react';
import ariel from './me-vector.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <div className="header">
        <h1 className="title-style">Ariel Lam</h1>
        <div className="intro-style">
          {/* <ReactRotatingText items={["developer", "designer", "artist"]} emptyPause={2000} /> */}
          Hey! My name is Ariel.
            <br />
          I like to develop, design, and draw.
            <br />
          UWaterloo Software Engineering.
            <br />
          Currently interning at <a href="http://bunch.live/">Bunch</a>.
          </div>

      </div>

      <img src={ariel} class="me-style" />

    </div>;
  }
}

export default App;
