import { useEffect, useState } from "react";

let ClockTime = () => {

  const[time ,setTimeUpdate]=useState(new Date());
  
  useEffect (()=>{
    const interval = setInterval (()=>{
        setTimeUpdate(new Date())
    },1000)
    return ()=>{
      clearInterval(interval)
    }
  } , [])

  return (
    <p className ="lead">
      this is the current time and date : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ClockTime;
