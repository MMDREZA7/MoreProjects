import React, { Component } from "react";
import "./QuizGame.css";

export default class QuizGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      score: 0,
      showScores: false,

      quiz: [
        // Questions

        // F I R S T QUESTION
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },

        // S E C O N D QUESTION
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },

        // T H I R D QUESTION
        {
          questionText: "The iPhone was created which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },

        // F O U R T H QUESTION
        {
          questionText: "How many Harry Patter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
      ],
    };
  }

  clickHandler(correcting) {
    console.log(correcting);
    if (this.state.currentQuestion > this.state.quiz.length - 2) {
      this.setState({ showScores: true });
    }
    if (correcting) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  }

  render() {
    if (this.state.showScores) {
      return (
        <div className="background">
          <div className="body">
            <div className="score-container">
              <h1 className="scoreText">
                Your Score is : {this.state.score} of 4 scores
              </h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="background">
          <div className="body">
            <div className="quiz-container">
              {/* Question Title */}
              <h2 className="questionText">
                {this.state.quiz[this.state.currentQuestion].questionText}
              </h2>
              <div className="answer-container">
                {/* Answers */}
                {this.state.quiz[this.state.currentQuestion].answerOptions.map(
                  (answer, index) => (
                    <button
                      className="bt-answer"
                      onClick={this.clickHandler.bind(this, answer.isCorrect)}
                      key={index}
                    >
                      {answer.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
