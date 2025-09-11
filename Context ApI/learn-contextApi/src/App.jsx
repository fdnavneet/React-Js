
// import './App.css

import { useState } from "react"
import College from "./College"
import { SubjectContext } from "./ContextData"





function App() {
  const [subject , setSubject]=useState('')
    return (
    <div style ={{backgroundColor:'yellow', padding:10}}>
     <SubjectContext.Provider value={subject}>
      <select defaultValue={subject} onChange={(e)=>setSubject(e.target.value)}>
        <option value="">Slect Subject</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>

      </select>
      <h1 >context api</h1>
      <button onClick={()=>setSubject('')}>Clear Subject</button>
     <College /> 
     </SubjectContext.Provider>
   </div>
    

  )
}

export default App
