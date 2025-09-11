import { useRef } from "react";

function AddTodo({ onNewItem }) {

  const todoNameUpdate = useRef();
  const dueDateUpdate = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName= todoNameUpdate.current.value;
    const dueDate= dueDateUpdate.current.value;
    todoNameUpdate.current.value = "";
    dueDateUpdate.current.value  = "";

    onNewItem(todoName, dueDate);
   
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameUpdate}
            placeholder="Enter Todo Here"
            
          />
        </div>
        <div className="col-4">
          <input
            type="Date"
            ref={dueDateUpdate}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">Add</button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
