import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

class TransformersQuiz extends Component {
    state = {
        questionBank: []
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
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) => (
                            <QuestionBox 
                                question={question} 
                                options={answers} 
                                key={questionId} 
                            />
                        ))}
            </div>
        )
    }
}

ReactDOM.render(<TransformersQuiz />, document.getElementById("root"));