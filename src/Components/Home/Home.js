import React from 'react';

const Home = ({setIsStart}) => {
    const startExam=() => {
        setIsStart(true)

    }
    return (
        <div className='container d-flex align-items-center justify-content-center flex-column pb-3' style={{margin:'200px auto',backgroundColor:'whiteSmoke',border:'1px solid grey',height:'40vh'}}>
            <h3>There are 10 Questions in the Exam. Answer Carefully.</h3>
            <button onClick={startExam} className='btn btn-danger rounded w-25 p-2 mt-1' >Lets Start</button>
        </div>
    );
};

export default Home;