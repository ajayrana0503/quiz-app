import React from 'react';
import { useState } from 'react';
import "./QuestionForm.css"
import Card from '../UI/Card';

const QuestionForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredQuestion: "", enteredOption1: "", enteredOption2: "", enteredOption3: "", enteredOption4: "",correctOption: "",category:"React"
    })
    const questionChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredQuestion: event.target.value
            }
        })
    }
    const option1ChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredOption1: event.target.value
            }
        })
    }

    const option2ChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredOption2: event.target.value
            }
        })
    }
    const option3ChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredOption3: event.target.value
            }
        })
    }
    const option4ChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredOption4: event.target.value
            }
        })
    }

    const correctOptionChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                correctOption: event.target.value
            }
        })
    }
    const categoryChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                category: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newQuestion = {
            question: userInput.enteredQuestion,
            option1: userInput.enteredOption1,
            option2: userInput.enteredOption2,
            option3: userInput.enteredOption3,
            option4: userInput.enteredOption4,
            correctOption:userInput.correctOption,
            category:userInput.category
        }
        props.onSaveQuestionData(newQuestion);
        setUserInput({
            enteredQuestion: "", enteredOption1: "", enteredOption2: "", enteredOption3: "", enteredOption4: "",correctOption: "",category:""
        })
    }
    return (
        <Card>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Question</label>
                    <input type="text" onChange={questionChangeHandler} value={userInput.enteredQuestion} />
                </div>
                <br></br>
                <div className="new-expense__control_category">
                       <label >Category </label>
                        <select className='quiz-checkbox' onChange={categoryChangeHandler} value={userInput.category}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="CSS">CSS</option>
                            <option value="HTML">HTML</option>
                        </select>
                 </div>
                <div className='option'>
                    <div className="new-expense__control">
                        <label>Option A</label>
                        <input type="text" onChange={option1ChangeHandler} value={userInput.enteredOption1} />
                    </div>
                    <div className="new-expense__control">
                        <label>Option B</label>
                        <input type="text" onChange={option2ChangeHandler} value={userInput.enteredOption2} />
                    </div>
                    <div className="new-expense__control">
                        <label>Option C</label>
                        <input type="text" onChange={option3ChangeHandler} value={userInput.enteredOption3} />
                    </div>
                    <div className="new-expense__control">
                        <label>Option D</label>
                        <input type="text" onChange={option4ChangeHandler} value={userInput.enteredOption4} />
                    </div>
                </div>
                <br></br>
                <div className="new-expense__control_category">
                        <label>Correct Option </label>
                        <select onChange={correctOptionChangeHandler} className='quiz-checkbox'>
                            <option value={userInput.enteredOption1}>A</option>
                            <option value={userInput.enteredOption2}>B</option>
                            <option value={userInput.enteredOption3}>C</option>
                            <option value={userInput.enteredOption4}>D</option>
                        </select>
                 </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Question</button>
                    <button onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
        </Card>
    )
}

export default QuestionForm