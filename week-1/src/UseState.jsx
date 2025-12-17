// import React, { useState } from "react";
// import './UseState.css'

// function UseState() {
  
//   const [num, updated] = useState(0);

//   let Inc = () => {
//     updated(num + 1);
//   };

//   let Dec = () => {
//     updated(num - 1);
//   };

//   return (
//     <div className="counter-container">
//       <h3>Number = {num}</h3>
//       <div>
//         <button className="counter-btn" onClick={Inc}>+</button>
//         <button className="counter-btn" onClick={Dec}>-</button>
//       </div>
//     </div>
//   );
// }

// export default UseState;


import React, {useState} from "react";

function UseState(){
  const [num, updatedNum] = useState(0)

  function inc(){
    updatedNum(num+1)
  }

  function dec(){
    updatedNum(num-1)
  }

  return(
    <div>
      <h1>Number: </h1>
      <h3>{num}</h3>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default UseState;