import React from 'react'
import { useDispatch } from 'react-redux'
import { changeMessage } from '../slice/messageSlice';

const Child = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(changeMessage("Child's message!!"))}>Send</button>
    </div>
  )
}

export default Child