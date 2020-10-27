import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { display: false };
  }

  handleClick = () => {
    this.setState({ display: true });
  };

  render() {
    return (
      <div id="main">
        <button onClick={this.handleClick} />
        {this.state.display && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
