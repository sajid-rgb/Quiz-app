import logo from './logo.svg';
import './App.css';
import QuizPage from './Components/QuizPage/QuizPage';
import { useState } from 'react';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [isStart,setIsStart] = useState(false)
  return (
    <div className="App">
      {
        isStart ?     <QuizPage /> : <Home setIsStart={setIsStart} />
      }


    </div>
  );
}

export default App;
