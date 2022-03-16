import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    students: [],
    show: false,
  };
  //a lifecycle method will execute when the page has loaded (this will only run once)
  componentDidMount() {
    this.setState(() => ({
      students: studentList,
    }));
  }

  //random button handler
  randomize = (event) => {
    //shuffle the array and set the state
    event.preventDefault();
    const randomStudents = this.state.students.sort(
      (a, b) => 0.5 - Math.random()
    );
    this.setState(() => ({
      show: true,
      students: randomStudents,
    }));
  };
  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.show &&
              this.state.students.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}
