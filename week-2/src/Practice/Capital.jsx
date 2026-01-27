import { useState } from "react";
import useCapital from "./useCapital";

function Capital(){
    const [data, setData] = useState("")
    const capitalize = useCapital(data)

    return(
        <>
        <input type="text"
         placeholder="type something.."
         value={data}
         onChange={(e)=>setData(e.target.value)}/>
         <h2>{capitalize}</h2>
        </>
    )
}

export default Capital;