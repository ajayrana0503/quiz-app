import React from 'react'
import Card from './Card'
import QuestionItem from './QuestionItem';
import "./Questions.css"

export const Questions = (props) => {
    const { questions } = props;
    return (
        <Card className='questions'>
            <div className='question-header'>
                <h3 className='quiz-total'>Total Question : 10</h3>
                <h3  className='quiz-timer'>Time : 10:00</h3>
            </div>
            {
                questions.map((question) => {
                    return <QuestionItem key={question.id} question={question} />
                })
            }

            <button className='quiz-submit'>Submit</button>
        </Card>
    )
}
