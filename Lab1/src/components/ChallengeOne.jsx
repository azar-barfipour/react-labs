import React, { Component } from "react";
import ch1 from "../assets/look-left.jpeg";
import ch2 from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here

  constructor() {
    super();
    this.state = { url: ch1 };
  }

  //click left/right button handler goes here
  lookLeftHandler = (event) => {
    event.preventDefault();
    this.setState({ url: ch2 });
  };

  lookRightHandler = (event) => {
    event.preventDefault();
    this.setState({ url: ch1 });
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.url} alt="face" />
        </div>
        <button className="btn" onClick={this.lookRightHandler}>
          ⭠
        </button>
        <button className="btn" onClick={this.lookLeftHandler}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
