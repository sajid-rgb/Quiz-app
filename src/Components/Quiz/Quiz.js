import React, { useEffect, useState } from 'react';
import he from 'he';

const Quiz = ({quize,index}) => {
    const {question,correct_answer,incorrect_answers} = quize;
    const ques = he.decode(question)
    const [answer,setAnswer] = useState(0)
    const [correctAnswer,setCorrectAnswer] = useState([])
    const [result,setResult] = useState([])
    const [isCheck,setIsCheck] = useState(false)
    const [isSuccess,setIsSuccess] = useState(false)
    const [isError,setIsError] = useState(false)
    const handleShowAnswer = (correctAnswer)=>{
        if(correctAnswer===correct_answer){
            setIsSuccess(true)

        }
        else{
            setIsError(true)
        }
        setIsCheck(true)
         setAnswer(answer+1)
    }
    useEffect(()=>{
        if(answer){
            setCorrectAnswer([...correctAnswer,answer])
        }

    },[answer])
    console.log(answer)
    return (
        <div className='container'>
          <div className='p-4 text-center ' style={{width:'100%',height:'15vh',background:'whiteSmoke',border:'1px solid grey',borderRadius:'5px'}}> <h5>{index}. {ques}</h5> </div>
             <div className="mt-3 mb-3 text-center">                   <button   className='ml-3 mt-3' className={isCheck?'btn btn-success w-25 mt-2 disabled':'btn btn-secondary w-25 mt-2'} onClick={() =>handleShowAnswer(correct_answer)} >{correct_answer}</button>
           {
               incorrect_answers.map(answer =><div>

                   <button  onClick={() =>handleShowAnswer(index)} className={isCheck?'btn btn-danger w-25 mt-2':"btn btn-secondary w-25 mt-2"} >
                    <span className='ml-5'>{he.decode(answer)}</span>
                    </button>

                   
                   </div>)
           }
                               {
               isSuccess ? <p className='text-success'>Success,Correct Answer</p>:isError?<p className='text-danger '>Ups Wrong Answer</p>:<p></p>
           }
           
</div>
        </div>
    );
};

export default Quiz;