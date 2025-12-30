import { useEffect, useState } from 'react'

function Timer() {
    let [sTime, newsTime] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            newsTime((prev)=>prev+1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

  return (
    <h2>Timer: {sTime} s</h2>
  );
}
export default Timer;