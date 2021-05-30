import React, { useState } from 'react';
import he from 'he';

const Quiz = ({quize,index}) => {
    const {question,correct_answer,incorrect_answers} = quize;
    const ques = he.decode(question)
    const [answer,setAnswer] = useState(0)
    const [result,setResult] = useState([])
    
    
    return (
        <div className='container'>
           <h3>{index} {ques}</h3> 
                    <input type="radio" name='answer' className='ml-3'  value={correct_answer}/>{correct_answer}
           {
               incorrect_answers.map(answer =><div>

                   <input  type="radio" name='answer' className='ml-3' />
                    <span className='ml-5'>{he.decode(answer)}</span>
                   
                   </div>)
           }

        </div>
    );
};

export default Quiz;