// import React, { useContext, useState } from 'react'
// import { useContexts } from './Parent'

// const Child = () => {
//     const {data, setData} = useContext(useContexts)
//     const [inputV, setInput] = useState("")

//     const handleClick = ()=>{
//         setData(inputV)
//         setInput("")
//     }
//   return (
//     <div>
//         <input type="text"
//          placeholder='Type something..'
//          value={inputV}
//          onChange={(e)=>setInput(e.target.value)}/>
//         <button onClick={handleClick}>Ok</button>
//         <h2>{data}</h2>
//     </div>
//   )
// }

// export default Child


import React, { useContext, useState } from 'react'
import { useContexts } from './Parent'

const Child = () => {
  const {data, setData} = useContext(useContexts)
  const [inputV, setInput] = useState("")

  const handle = ()=>{
    setData(inputV)
    setInput("")
  }
  return (
    <div>
      <input type="text"
       placeholder='Type something..'
       value={inputV}
       onChange={(e)=>setInput(e.target.value)}/>
       <button onClick={handle}>Ok</button>
       <h2>{data}</h2>
    </div>
  )
}

export default Child