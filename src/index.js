import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

class TransformersQuiz extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };

    /**
     * Function getQuestions
     * Invokes quiz service api and populates questionBank variable with the results
     */
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }

        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    };

    /**
     * Function componentDidMount
     * Run getQuestions function when this component loads up
     */
    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="Container">
                <div className="title">Transformers Quiz</div>
                {this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) => (
                            <QuestionBox 
                                question={question} 
                                options={answers} 
                                key={questionId} 
                                selected={answer => this.computeAnswer(answer, correct)}
                            />
                        ))}

                {this.state.responses === 5 ? (<h2>{this.state.score}</h2>) : null}
            </div>
        )
    }
}

ReactDOM.render(<TransformersQuiz />, document.getElementById("root"));