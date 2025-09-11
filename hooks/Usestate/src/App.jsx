
// import './App.css'
import Counter from './Counter'

import { useState } from "react"

function App() {
   
  const [fruit,setFruit]=useState("banan")

  const handleOnClick = ()=> {
    setFruit("kuch vi ")
  }

  return (
    <>
     <h1>UseState</h1>
     <p>{fruit}</p>
     <button onClick={handleOnClick}>Click Me to Change Fruit Name</button>

     <Counter></Counter>

    </>
  )
}

export default App
