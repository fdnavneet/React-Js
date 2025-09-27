
import { useState } from "react";
const GetValue = () => {


 const [value, setValue] = useState("");

  const getValue = (e) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <div>get input in real time</div>
      {/* <br />
      <input
        type="text"
        value={value}
        placeholder="Enter user Name"
        onChange={getValue}
      />
      <h1>{value}</h1>
      <button onClick={() => setValue("")}>clear</button> */}

      <br />
      <br />

      {/* task three input field lyna hai or value ko state ke andr set krna hai or clear krna hai */}

      <input type="text" onChange={getValue} placeholder="enter name" />
      <br />
      <br />
      <input type="text"  onChange={getValue} placeholder="enter age" />
      <br />
      <br />
      <input type="text"  onChange={getValue} placeholder="enter email" />

      <h1>Name:{value}</h1>
      <h1>age:{value}</h1>
      <h1>email:{value}</h1>
    </div>
  )
}

export default GetValue