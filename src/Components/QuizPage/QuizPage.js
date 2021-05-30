import React, { useEffect, useState } from 'react';
import Quiz from '../Quiz/Quiz';
import Timer from '../Timer/Timer';

const QuizPage = ({}) => {
    const [quizes,setQuizes] = useState([])
    
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(data=>setQuizes(data.results))

    },[])

    return (
        <div className="container mt-5 mb-5">
           <div className="d-flex justify-content-between " style={{backgroundColor:'whiteSmoke'}}>
           <h2 className='mt-5 ms-5 text-success '> Thanks for joining us</h2>
              <div className='text-danger' style={{border:'1px solid black',width:'200px',height:'120px',padding:'40px',fontSize:'30px'}}><Timer /></div>
           </div>
            <div className='mt-4'>
            {
                quizes.map((quize,index=0)=><Quiz quize={quize} index={index=index+1}></Quiz>)
            }
            </div>

        </div>
    );

};

export default QuizPage;