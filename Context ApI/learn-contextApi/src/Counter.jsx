import { useState } from "react";

const Counter = () =>{
  const [count,setCount] =useState(" 0")

  const changeCounterValue = () =>{
    setCount(count+1)
  }

 return(
  <div>
    <p>Count:{count}</p>
    <button onClick={changeCounterValue}>click to change counter value</button>
  </div>
 )
};

export default Counter;