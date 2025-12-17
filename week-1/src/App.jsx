// import Card from "./Card";
// import Button from "./Button/button";
// import Student from "./Student";
// import ConditionalRend from "./conditionalRend";
// import List from "./List";
// import React, {useState} from "react";
// import Child from "./Child";


// function App() {
//   const [text, setText] = useState("")

//   function handlingSetText(data){
//     setText(data)
//   }

//     return(
//     <>
      {/* <Card/>
      <Card/> */}
      {/* <Button/> */}
      {/* <Student name = "Aswathy" age = {22} isStudent = {true}/>
      <Student name = "Ashika" age = {23} isStudent = {false}/>
      <Student name = "Belwin" age = {28} isStudent = {false}/>
      <Student /> */}

      {/* <ConditionalRend isActive = {true} name = "Aswathy"/> */}

      {/* <List/> */}

      {/* <div>
        <h1>Parent</h1>
        <h2>{text}</h2>
        <Child sendToParent = {handlingSetText}/>
      </div>
    </>
  );
}

export default App */}

import { func } from "prop-types";
// import Card from "./Card";

// function App(){
//   const data = [
//     {id: 1, name: "Leanne Graham", email: "leanne@gmail.com"},
//     {id: 2, name: "Ervin Howel", email: "ervin@gmail.com"}
//   ]
//   return(
//     <div className="container">
//       {data.map((user)=>(
//         <Card
//         key={user.id}
//         name={user.name}
//         email={user.email}/>
//       ))}
//     </div>
//   );
// }

// export default App;




// import UseState from "./UseState";

// function App(){
//   return(
//     <UseState/>
//   );
// }

// export default App;

// import React, {useState, useRef} from 'react'

// export default function App(){
//   const [name, setName] = useState('')
//   const inputRef = useRef(null)

//   function handleSubmit(e){
//     e.preventDefault()
//     if(name==""){
//       console.log('Name is required');
//       inputRef.current.focus()
//       return
//     }

//     console.log("Submitted name: ", name);
//   }

//   function handleChange(e){
//     setName(e.target.value);
//   }

//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name: </label>
//         <input type="text" red={inputRef} value={name} onChange={handleChange} placeholder='Enter a text'/>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(1);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       setLoading(true);
//       setError(null);
//       setUser(null);

//       try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);

//         if (!res.ok) throw new Error("User not found!");

//         const data = await res.json();
//         setUser(data);
//       } catch (err) {
//         setError(err.message);
//       }

//       setLoading(false);
//     }

//     fetchUser();
//   }, [count]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>{count}</h1>

//       {/* Counter buttons */}
//       <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>-</button>
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>

//       <hr />

//       {/* Loading */}
//       {loading && <p>Loading user...</p>}

//       {/* Error */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* User Data */}
//       {user && (
//         <div>
//           <h2>{user.name}</h2>
//           <p>Email: {user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import Child from "./Child";

// import React, {useState} from "react";

// function App(){
//   const [text, setText] = useState("")

//   function handleing(data){
//     setText(data)
//   }

//   return(
//     <div>
//       <h1>Parent: </h1>
//       <p>{text}</p>
//       <Child sendToParent={handleing}/>
//     </div>
//   );
// }

// export default App;


/////////////////////////////////////////////////////////////////////////////////
// import Child from "./Child";

// function App(){
//   let val = "Aswathy"
//   return(
//     <Child prop = {val}/>
//   );
// }

// export default App;


//////////////////////////////////////////////////////////////////////////////////

// import UseState from "./UseState";

// function App(){
//   return(
//     <UseState/>
//   );
// }

// export default App;

import React from 'react'
import Child from "./Child";

export default function () {
  return (
    <div>
      <Child/>
    </div>
  )
}
