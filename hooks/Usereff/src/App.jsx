import { useEffect } from "react"

import { useState } from "react"

function App() {
  const [count , setCount]=useState(0)

  const [data,setDta]=useState(0);


  useEffect(()=>{
    callmultiple()
  },[count])


  // multipple useEffect

  useEffect(()=>{
    callOnce()
  },[])

  const callOnce = () =>{
    console.log("call one function called once")
  }

   const callmultiple = () =>{
    console.log("call multiple function called once")
  }

  
  
  return (
    <>
     <h1>UseReff</h1>
     <button onClick={()=>setCount(count+1)}>count:{count}</button>
     <button onClick={()=>setDta(data+1)}>data{data}</button>


    </>
  )
}

export default App
