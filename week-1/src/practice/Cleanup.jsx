import React from 'react'
import { useEffect } from 'react'

const Cleanup = () => {
  useEffect(()=>{
    console.log("Mounted");

    return()=>{
        console.log("Un mounted")
    }
  },[])
}

export default Cleanup