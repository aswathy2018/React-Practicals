// import React, { createContext, useState } from 'react'

// export const useContexts = createContext()

// const Parent = ({children}) => {
//     const [data, setData] = useState("")
//   return (
//     <useContexts.Provider value={{data, setData}}>
//         {children}
//     </useContexts.Provider>
//   )
// }

// export default Parent


import React, { createContext, useState } from 'react'

export const useContexts = createContext()

const Parent = ({children}) => {
  const [data, setData] = useState("")
  return (
    <useContexts.Provider value={{data, setData}}>
      {children}
    </useContexts.Provider>
  )
}

export default Parent