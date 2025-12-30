// import { useRef } from "react";

// function UseRef(){
//     const inputRef = useRef(null)

//     const handleSubmit = ()=>{
//         alert(inputRef.current.value)
//     }

//     return(
//         <>
//         <input type="text" ref={inputRef}/>
//         <button onClick={handleSubmit}>Submit</button>
//         </>
//     );
// }

// export default UseRef;





import React, { useRef, useState } from 'react'

export default function Child() {
    const [data, setData] = useState(0)
    const inputRef = useRef(0)
    function handling(){
        inputRef.current = inputRef.current+1
        console.log(`Updating ref: ${inputRef.current}`);
    }


    function inc(){
        console.log("Data Increment");
        setData(p=>p+1)
    }
  return (
    <div>
        <h1>{data}</h1>
        <h3>Value: {inputRef.current}</h3>
        <button onClick={inc}>State</button>
        <button onClick={handling}>Ref</button>
    </div>
  )
}