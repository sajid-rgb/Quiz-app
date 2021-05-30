import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const minutes = 10;
    const minutesToMillis=(min)=>{
        return min*60*1000
    }
    const [millis,setMillis] = useState(minutesToMillis(minutes))
    const minute = Math.floor(millis/1000/60)%60
    const second = Math.floor(millis/1000)%60
    const formatTime=(time)=>time<10 ? `0${time}`:`${time}`
    const interval = useRef(null)
    const [isFinshed,setIsFinished] = useState(false)
    const countDown =()=>{
        setMillis(time=>{
            if (time===0){
                setIsFinished(true)
                return time
            }
            else{
                const timeLeft = time - 1000;
                return timeLeft
            }
        })
    }
    
    useEffect(() => {
        interval.current=setInterval(countDown,1000)
        return (()=>clearInterval(interval.current))
    })
    return (
        <div style={{fontSize:'30px',marginLeft:'40px'}}>
            <h4 className="mt-5 text-light ml-5">{formatTime(minute)}:{formatTime(second)}</h4>
            {
                isFinshed && alert("Time Finished")
            }
        </div>
    );
};

export default Timer;