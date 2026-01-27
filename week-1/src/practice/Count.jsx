import React, { useState } from 'react'

const Count = () => {
    let [data, setData] = useState(0)

    const inc = ()=>{
        if(data==5){
            setData(data)
        }else{
            setData(data+1)
        }
    }
    const dec = () =>{
        if(data==0){
            setData(data)
        }else{
            setData(data-1)
        }
    }
    
  return (
    <div>
        <h3>{data}</h3>

        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default Count