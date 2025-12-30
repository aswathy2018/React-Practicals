// import { useState } from "react";
// import Child from "./practice/Child"

// function App(){
//     const [data, setData] = useState("")

//     function setting(data){
//         setData(data)
//     }

//     return(
//         <div>
//             <h1>Parent: </h1>
//             <h3>{data}</h3>
//             <h4><Child props={setting}/></h4>
//         </div>
//     );
// }

// export default App;



import Timer from "./practice/Timer"


function App() {
  return (
    <Timer/>
  )
}

export default App