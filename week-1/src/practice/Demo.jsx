import React, { useEffect, useState } from 'react'

const Demo = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((val)=>setData(val))
    .catch((error)=>console.log(error))
  })

  return (
    <>
    <h2>Fetched data: </h2>
    <ol>
      {data.map((item)=>(
        <li key = {item.id}>{item.title}</li>
      ))}
    </ol>
    </>
  )
}

export default Demo