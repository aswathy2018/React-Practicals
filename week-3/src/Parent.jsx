import React from 'react'
import { useSelector } from 'react-redux'
import Child from './Child';

const Parent = () => {
    const msg = useSelector((state)=>state.message.text);
  return (
    <div>
        <h2>Message: {msg}</h2>
        <Child/>
    </div>
  )
}

export default Parent