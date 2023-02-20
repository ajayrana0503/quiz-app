import React from 'react';
import { useRef, useState } from 'react';
import classes from "./QuestionForm.module.css"
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const QuestionForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     enteredQuestion: "", enteredOption1: "", enteredOption2: "", enteredOption3: "", enteredOption4: "", correctOption: "", category: "React"
    // })

    const questionInputRef = useRef("");
    const categoryInputRef = useRef("React");
    const option1InputRef = useRef("");
    const option2InputRef = useRef("");
    const option3InputRef = useRef("");
    const option4InputRef = useRef("");
    const correctOptionInputRef = useRef("");

    const [error, setError] = useState();

    /*  const questionChangeHandler = (event) => {
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
  */
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredQuestion=questionInputRef.current.value;
        const option1=option1InputRef.current.value;
        const option2=option2InputRef.current.value;
        const option3=option3InputRef.current.value;
        const option4=option4InputRef.current.value;
        if (enteredQuestion.trim().length === 0 || option1.trim().length === 0 || option2.trim().length === 0 || option3.trim().length === 0 || option4.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid input (non-empty)",
            });
            return;
        }
        const newQuestion = {
            question: questionInputRef.current.value,
            option1: option1InputRef.current.value,
            option2: option2InputRef.current.value,
            option3: option3InputRef.current.value,
            option4: option4InputRef.current.value,
            correctOption: correctOptionInputRef.current.value,
            category: categoryInputRef.current.value
        }

        props.onSaveQuestionData(newQuestion);

        questionInputRef.current.value = ""
        categoryInputRef.current.value = ""
        option1InputRef.current.value = ""
        option2InputRef.current.value = ""
        option3InputRef.current.value = ""
        option4InputRef.current.value = ""
        correctOptionInputRef.current.value = ""

        /*     setUserInput({
                 enteredQuestion: "", enteredOption1: "", enteredOption2: "", enteredOption3: "", enteredOption4: "", correctOption: "", category: ""
             })
             */
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <div className={`${classes.new_expense}`}>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card >
                <form onSubmit={submitHandler}>
                    <div className={`${classes.new_expense__controls}`}>
                        <div className={`${classes.new_expense__control}`}>
                            <label>Question</label>
                            <input type="text" //onChange={questionChangeHandler} value={userInput.enteredQuestion} 
                            ref={questionInputRef}
                            />
                        </div>
                        <br></br>
                        <div className={`${classes.new_expense__control__category}`}>
                            <label >Category </label>
                            <select className={`${classes.quiz_checkbox}`} 
                            //</div>onChange={categoryChangeHandler} value={userInput.category}
                            ref={categoryInputRef}>
                                <option value="React">React</option>
                                <option value="Angular">Angular</option>
                                <option value="CSS">CSS</option>
                                <option value="HTML">HTML</option>
                            </select>
                        </div>
                        <div className={`${classes.option}`}>
                            <div className={`${classes.new_expense__control}`}>
                                <label>Option A</label>
                                <input type="text"
                                // onChange={option1ChangeHandler} value={userInput.enteredOption1} 
                                ref={option1InputRef} />
                            </div>
                            <div className={`${classes.new_expense__control}`}>
                                <label>Option B</label>
                                <input type="text" //onChange={option2ChangeHandler} value={userInput.enteredOption2} 
                                ref={option2InputRef}
                                />
                            </div>
                            <div className={`${classes.new_expense__control}`}>
                                <label>Option C</label>
                                <input type="text" //onChange={option3ChangeHandler} value={userInput.enteredOption3} 
                                ref={option3InputRef}
                                />
                            </div>
                            <div className={`${classes.new_expense__control}`}>
                                <label>Option D</label>
                                <input type="text" //onChange={option4ChangeHandler} value={userInput.enteredOption4} 
                                 ref={option4InputRef}
                                />
                            </div>
                        </div>
                        <br></br>
                        <div className={`${classes.new_expense__control_category}`}>
                            <label>Correct Option </label>
                            <select //</div>onChange={correctOptionChangeHandler} className='quiz-checkbox'
                            ref={correctOptionInputRef}>
                                <option value={option1InputRef.current.value}>A</option>
                                <option value={option2InputRef.current.value}>B</option>
                                <option value={option3InputRef.current.value}>C</option>
                                <option value={option4InputRef.current.value}>D</option>
                            </select>
                        </div>
                        <div className={`${classes.new_expense__actions}`}>
                            <button type="submit">Add Question</button>
                            <button onClick={props.onCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default QuestionForm