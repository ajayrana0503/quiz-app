import classes from './App.module.css';
import { Questions } from './components/Questions/Questions';
import NewQuestion from './components/NewQuestions/NewQuestion';
import { useState } from 'react';


const initialquestions = [
  { id: 1, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
  { id: 2, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"Angular" },
  { id: 3, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
  { id: 4, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"Angular" },
  { id: 5, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React"},
  { id: 6, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"HTML" },
  { id: 7, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
  { id: 8, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"HTML"},
  { id: 9, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
  { id: 10, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"CSS" },
]

function App() {


  const [question,setQuestion] = useState(initialquestions);
   const addQuestionHandler = (question) => {
    setQuestion((prevQuestion) => {
      // console.log(question);
      return [...prevQuestion,question]
    });
   };

  return (
    <div className={`${classes.App}`}>
      <h1>QUIZ</h1>
      <NewQuestion onAddQuestion={addQuestionHandler} totalQuestion={initialquestions.length}/>
      <Questions questions={question} />
    </div>

  );
}

export default App;
