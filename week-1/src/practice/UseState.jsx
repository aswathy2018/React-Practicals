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


////////////////////////////////////////////////////////////////////////////////////////////


// import { useState } from "react";

// function UseState(){
//   const [text, updatedText] = useState("")

//   return(
//     <>
//     <input type="text" value={text} onChange={(e)=>updatedText(e.target.value)}/>

//     <h2>Name: {text}</h2>
//     </>
//   );
// }

// export default UseState;