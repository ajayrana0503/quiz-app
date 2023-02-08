import React from 'react'
import Card from '../UI/Card';
import "./QuestionItem.css"

const QuestionItem = (props) => {
    const id = props.question.id;
    const question = props.question.question;
    const option1 = props.question.option1;
    const option2 = props.question.option2;
    const option3 = props.question.option3;
    const option4 = props.question.option4;

    return (
        <div>
            <Card className="question-item">
                <div>
                    <h2 className='question-color'>Q.{id} {question}</h2>
                    <div>
                        <p className="answers"> <input type="radio" name={id} value={option1} id="1"></input> {option1}</p>
                        <p className="answers"> <input type="radio" name={id} value={option2} id="2"></input> {option2}</p>
                        <p className="answers">  <input type="radio" name={id} value={option3} id="3"></input> {option3}</p>
                        <p className="answers">  <input type="radio" name={id} value={option4} id="4"></input> {option4}</p>
                    </div>
                </div>
                <p className="quiz-remain">{id} of 10</p>
            </Card>

            <hr />
        </div>
    )
}

export default QuestionItem