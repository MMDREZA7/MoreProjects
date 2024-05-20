import React, { Component } from "react";
import QuizGame from "./quiz-game/QuizGame";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <QuizGame />
        </div>
      </div>
    );
  }
}
