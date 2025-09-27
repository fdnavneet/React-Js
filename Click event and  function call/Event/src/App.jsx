
 const fruit = (name) =>{
  alert (name)
 }
const App =() =>{

//  const fruit = (name) =>{
//   alert (name)
//  }

  return (
    <div>
      {/* pass parameter in function */}
      <button onClick ={()=>fruit("apple")}>Apple</button>
      <button onClick ={fruit}>bnana</button>

      {/* esi ke wjh se calling pass nhi krte hai krte hai */}
      {/* <button onClick={fruit()}>calling</button> */}
    </div>
  )
}

export default App