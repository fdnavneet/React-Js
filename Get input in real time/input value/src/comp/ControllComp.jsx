import { useState } from "react"


const ControllComp = () => {
  const[name,setName]=useState("")
  const[pass,setPass]=useState("")
  const[email,setEmail]=useState("")


  const getNameValue =(e)=>{
     setName(e.target.value)
  }

  const getPssValue =(e)=>{
     setPass(e.target.value)
  }
  const getEmailValue =(e)=>{
     setEmail(e.target.value)
  }

  const clear = ()=>{
    setName("")
    setEmail("")
    setPass("")
  }
  return (
    <div>
      <input type="text" value={name}  placeholder="enter name " onChange={getNameValue} />
      <br />
      <br />
       <input type="text" value={pass} placeholder="enter password"  onChange={getPssValue}  />
      <br />
      <br />
       <input type="text" value={email} placeholder="enter email"  onChange={getEmailValue} />
      <br />
      <br />

      <h1>name:{name}</h1>
      <h1>password:{pass}</h1>
      <h1>email:{email}</h1>


      <button onClick={clear}>Clear value</button>
    </div>
  )
}

export default ControllComp