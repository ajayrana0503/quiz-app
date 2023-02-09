import React from 'react';
import { useState } from 'react';
import QuestionForm from './QuestionForm';
import './NewQuestion.css'

const NewQuestion = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveQuestionDataHandler = (enteredQuestionData) => {
        const questionData = {
            ...enteredQuestionData,
            id: props.totalQuestion+1,
        };
        console.log(questionData) 
        props.onAddQuestion(questionData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
        return (
            <div className="new-expense">
                {!isEditing && (
                    <button onClick={startEditingHandler}>Add New Question</button>
                )}
                {isEditing && (
                    <QuestionForm
                        onSaveQuestionData={saveQuestionDataHandler}
                        onCancel={stopEditingHandler}
                    />
                )}
            </div>
        )
}

export default NewQuestion