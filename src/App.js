import './App.css';
import { Questions } from './components/Questions';
import Card from './components/Card';

function App() {

  const questions = [
    {id:1, question:"What is ReactJS", option1:"React is a javascript library", option2:"React is a javascript framework", option3:"Both A and B",option4:"None on these" },
    {id:2, question:"In which language is React.js written?", option1:"Python", option2:"Javascript", option3:"Java",option4:"Php" },
  ]

  return (
    <div className="App">
    <h1>QUIZ</h1>
    <Questions questions={questions}/>
    </div>
    
  );
}

export default App;
