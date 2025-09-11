import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcomemessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContex } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContex.Provider value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem,
      }}>
      <center className="todo-container">
        <AppName />
        <AddTodo  />
         <WelcomeMessage  />
        <TodoItems
          
        ></TodoItems>
      </center>
    </TodoItemsContex.Provider>
  );
}

export default App;
