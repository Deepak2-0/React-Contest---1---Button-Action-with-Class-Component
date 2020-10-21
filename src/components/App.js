import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    id: "",
    para: ""
  };

  handleClick = () => {
    this.setState({
      id: "para",
      para:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  };

  render() {
    return (
      <div id="main">
        <button onClick={this.handleClick}>Click</button>
        <p id={this.state.id}>{this.state.para}</p>
      </div>
    );
  }
}

export default App;
