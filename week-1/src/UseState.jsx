import React, {useState} from "react";

function UseState(){
    const [num, updated] = useState(0)

    let count = ()=>{
        updated(num+1)
    }

    return(
        <div>
            <h3>Number = {num}</h3>
            <button onClick={count}>Add</button>
        </div>
    );
}

export default UseState;