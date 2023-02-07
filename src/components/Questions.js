import React from 'react'
import Card from './Card'
import QuestionItem from './QuestionItem';
import "./Questions.css"

export const Questions = (props) => {
    const {questions}=props;
  return (
    <Card className='questions'>
        <div style={{"display":"flex"}}>
      <h3 style={{"text-align":"left"}}>Total Question : 10</h3>
      <h3  style={{"marginLeft":"60%"}}>Time : 10:00</h3>
         </div>
    {
        questions.map((question)=>{
            return <QuestionItem key={question.id} question={question} />
        })
    }

    <button style={{"marginLeft":"80%", "fontSize":"20px"}}>Submit</button>
    </Card>
  )
}
