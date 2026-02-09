import React, { useReducer } from 'react'

const InitialState = {count: 0};

function reducer(state, action){
    switch(action.type){
        case "Inc": return {count: state.count+1}
        case "Dec": return {count: state.count-1}

        default: return state
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, InitialState)
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={()=>dispatch({type: "Inc"})}>+</button>
        <button onClick={()=>dispatch({type: "Dec"})}>-</button>
    </div>
  )
}

export default Counter