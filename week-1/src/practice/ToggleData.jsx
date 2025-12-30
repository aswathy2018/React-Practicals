import React, { useState } from 'react'

function ToggleData() {
    const [data, setData] = useState(false)

    function handle(){
        setData(!data)
    }
  return (
    <div>
        <button onClick={handle}>Click</button>
        {data && (
            <p>This is the data</p>
        )}
    </div>
  )
}

export default ToggleData