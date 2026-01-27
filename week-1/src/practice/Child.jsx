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



// import React from 'react'

// const Child = ({props}) => {
//   return (
//     <div>
//       <button onClick={()=>props("Hii")}>Ok</button>
//     </div>
//   )
// }

// export default Child 


import React, { useContext } from 'react'
import {userContext} from './Test'

const Child = () => {
  const {data, setData} = useContext(userContext)
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>setData("Hiii")}>Ok</button>
    </div>
  )
}

export default Child