import TodoItem from "./TodoItem";

const Todoitems = ({ todoItems }) => {
  return (
    <>
      {/* <div className="items-container">
        {todoItems.map(item =><TodoItem todoDate={item.date} todoName={item.name}></TodoItem> )}

         <TodoItem todoDate="4/10/2025" todoName="buy milk"></TodoItem>
        <TodoItem todoDate="4/10/2025" todoName="go to collage"></TodoItem> 
      </div> */}

      {todoItems.map((item) => (
        <TodoItem key = {item.name} todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </>
  );
};

export default Todoitems;
