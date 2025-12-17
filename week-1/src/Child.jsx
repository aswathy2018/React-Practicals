// function Child({sendToParent}){
//     const name = "Aswathy"

//     function handling(){
//         sendToParent(name)
//     }

//     return(
//         <div>
//             <h2>Child: </h2>
//             <button onClick={handling}>Ok</button>
//         </div>
//     );
// }

// export default Child;

////////////////////////////////////////////////////////////////////////////////////

// function Child({prop}){
//     return(
//         <div>
//             <p>{prop}</p>
//         </div>
//     );
// }

// export default Child;




// UseRef

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


