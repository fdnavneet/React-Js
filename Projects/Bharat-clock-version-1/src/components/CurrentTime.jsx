let ClockTime = () => {
  let time = new Date();
  return (
    <p className ="lead">
      this is the current time and date : {time.toDateString()} -{" "}
      {time.toTimeString()}
    </p>
  );
};

export default ClockTime;
