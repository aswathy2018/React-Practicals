// import React, { useState } from 'react'
// import Demo from './practice/Demo'
// import Child from './practice/Child'

// const App = () => {
//   let [data, setData] = useState('')

//   let handleData = (data)=>{
//     setData(data)
//   }
//   return(
//     <div>
//       <h2>Message: {data}</h2>
//       <Child props = {handleData}/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Test from './practice/Test'
import Child from './practice/Child'

const App = () => {
  return (
    <div>
      <Test>
        <Child/>
      </Test>
    </div>
  )
}

export default App