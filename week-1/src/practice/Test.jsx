import { createContext, useState } from "react";

export const userContext = createContext()

const Test = ({children}) => {

    let [data, setData] = useState("")
  return (
    <userContext.Provider value={{data, setData}}>
        {children}
    </userContext.Provider>
  )
}

export default Test
