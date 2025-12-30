import React, { useEffect, useState } from 'react'

function Timer() {
  const [time, setTime] = useState(0)
  const [isTime, setIsTime] = useState(false)

  useEffect(()=>{
    let interval;

    if(isTime){
      interval = setInterval(()=>{
        setTime((prev)=>prev+1)
      },1000)
    }
    return()=>clearInterval(interval)
  },[isTime]);

  function reset(){
    setIsTime(false)
    setTime(0)
  }

  return (
    <div>
      <h2>Timer: {time}</h2>
      <button onClick={()=>setIsTime(true)}>Start</button>
      <button onClick={()=>setIsTime(false)}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer