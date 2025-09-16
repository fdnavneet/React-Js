import { useRef } from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const Dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    Dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    Dispatch({
      type: "DECREMENT",
    });
  };

  const handleAdd = () => {
    inputElement.current.value;
    Dispatch({
      type: "ADD",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    inputElement.current.value;
    Dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handleToggle = () => {
    inputElement.current.value;
    Dispatch({
      type: "PRIVACY_TOGGLE",
  });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button type="button" className="btn btn-warning"
        onClick={handleToggle}>
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Button;
