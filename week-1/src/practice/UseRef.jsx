import { useRef } from "react";

function UseRef(){
    const inputRef = useRef(null)

    const handleSubmit = ()=>{
        alert(inputRef.current.value)
    }

    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default UseRef;