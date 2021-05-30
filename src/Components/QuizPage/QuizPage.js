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
           <div className="d-flex justify-content-evenly" style={{backgroundColor:'whiteSmoke',border:'1px solid black',borderRadius:'5px'}}>
           <h2 className='mt-5 ms-5 text-success ' style={{}}> Thanks for joining us<br/><span className='text-danger'>Click Only One time Carefully</span></h2>
              <div className='text-danger ' style={{border:'1px solid black',width:'140px',height:'140px',padding:'',fontSize:'30px',borderRadius:'100px',backgroundColor:'grey'}}><Timer /></div>
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