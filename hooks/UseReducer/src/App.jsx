
// import './App.css'

import { useReducer } from "react"

const initaldata={
  name: '',
  password: ''
}

const reducer = (data,action)=>{
  return {...data ,[action.type]:action.val}
}

function App() {

  const[state,disptch]=useReducer(reducer,initaldata)
  console.log(state)
  return (
    <>
    <h1>Use Reducer</h1>
     <input type="text" onChange={(e)=>disptch({val:e.target.value, type:'name'})} placeholder="Enter you Name" />
     <br />
     <br />

     <input type="text"  onChange={(e)=>disptch({val:e.target.value, type:'password'})} placeholder="Enter you Password" />
     <br />
     <br />

     <button>Add Details</button>

     <li>name:{state.name}</li>
     <li>password:{state.password}</li>


    </>
  )
}

export default App
