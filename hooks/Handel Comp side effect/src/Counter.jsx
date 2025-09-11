import { useEffect } from "react";

const Counter = ({ count, data }) => {
  const handleCounter = () => {
    console.log("called handleCounter");
  };

  const handleData = () => {
    console.log("handle data ");
  };

  useEffect(() => {
    handleCounter();
  }, []);
    

  //  line 18 to 20 call on cahnging prop
  useEffect(() => {
    handleData();
  }, [data]);

  return (
    <div>
      <h1>Counter value {count}</h1>
      <h1>Data value {data}</h1>
    </div>
  );
};

export default Counter;
