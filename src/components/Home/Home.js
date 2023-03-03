import React from 'react';
import { useEffect,useState } from 'react';
import classes from './Home.module.css';
import NewQuestion from '../NewQuestions/NewQuestion';
import { Questions } from '../Questions/Questions';

const initialquestions = [
  { id: 1, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these", category: "React" },
  { id: 2, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php", category: "Angular" },
  { id: 3, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these", category: "React" },
  { id: 4, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php", category: "Angular" },
  { id: 5, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these", category: "React" },
  { id: 6, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php", category: "HTML" },
  { id: 7, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these", category: "React" },
  { id: 8, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php", category: "HTML" },
  { id: 9, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these", category: "React" },
  { id: 10, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php", category: "CSS" },
]


const Home = (props) => {
  const [question, setQuestion] = useState(initialquestions);
  const [trainer, setTrainer] = useState(false);
  useEffect(()=>{
      if(localStorage.getItem('role')==='trainer'){
        setTrainer(true);
      }
    },[]);

  const addQuestionHandler = (question) => {
    setQuestion((prevQuestion) => {
      // console.log(question);
      return [...prevQuestion, question]
    });
  };

  return (
    // <Card className={classes.home}>
    //   <h1>Welcome back!</h1>
    // </Card>
    <div className={`${classes.home}`}
    >
      {!trainer && (
        <Questions questions={question} />
      )
      }
      {trainer && (
        <div>
        <NewQuestion onAddQuestion={addQuestionHandler} totalQuestion={initialquestions.length} />
         <Questions questions={question} />
         </div>
      )
      }
      
    </div>

  );
};

export default Home;
