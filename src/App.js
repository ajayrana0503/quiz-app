import classes from './App.module.css';
import React from 'react';
import { Questions } from './components/Questions/Questions';
import NewQuestion from './components/NewQuestions/NewQuestion';
import { useEffect,useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
 

// const initialquestions = [
//   { id: 1, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
//   { id: 2, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"Angular" },
//   { id: 3, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
//   { id: 4, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"Angular" },
//   { id: 5, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React"},
//   { id: 6, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"HTML" },
//   { id: 7, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
//   { id: 8, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"HTML"},
//   { id: 9, question: "What is ReactJS", option1: "React is a javascript library", option2: "React is a javascript framework", option3: "Both A and B", option4: "None on these",category:"React" },
//   { id: 10, question: "In which language is React.js written?", option1: "Python", option2: "Javascript", option3: "Java", option4: "Php",category:"CSS" },
// ]


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users =    {
    "1": {
    "id": 1,
    "name": "ajay",
    "email":"ajay@gmail.com",
    "password":"1234567",
    "role":"trainer"
    },
    "2": {
      "id": 2,
      "name": "ayush",
      "email":"ayush@gmail.com",
      "password":"1234567",
      "role":"trainee"
      }
  }
  const [user,setUser]=useState(users);
  const userdetails = JSON.parse(localStorage.getItem('users'));

  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(user));
    const userLoggedInStatus=localStorage.getItem("isLoggedIn");
    //console.log(userdetails[1].role);
    if(userLoggedInStatus==="1"){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    //localStorage.setItem("isLoggedIn","1");
    Object.keys(userdetails || {}).forEach(function(key, index) {
      if(email===userdetails[key].email && password===userdetails[key].password){
        localStorage.setItem("isLoggedIn","1");
        localStorage.setItem("role",userdetails[key].role)
        localStorage.setItem("name",userdetails[key].name)
        setIsLoggedIn(true);
        }
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    //localStorage.removeItem("users")
    localStorage.removeItem('role')
    setIsLoggedIn(false);
  };

 


  // const [question,setQuestion] = useState(initialquestions);
  //  const addQuestionHandler = (question) => {
  //   setQuestion((prevQuestion) => {
  //     // console.log(question);
  //     return [...prevQuestion,question]
  //   });
  //  };

  return (
    <React.Fragment>
      <main>
        {!isLoggedIn && 
        <div>
        <h1 className={`${classes.App}`}>QUIZ APP</h1>
        <Login onLogin={loginHandler} />
        </div>
        }
        {isLoggedIn && (
        <div>
        <Home onLogout={logoutHandler} isLoggedIn={isLoggedIn}/> 
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
         </div>
        )}
      </main>
    {/* <div className={`${classes.App}`}>
      <NewQuestion onAddQuestion={addQuestionHandler} totalQuestion={initialquestions.length}/>
      <Questions questions={question} />
    </div> */}
    </React.Fragment>

  );
}

export default App;
