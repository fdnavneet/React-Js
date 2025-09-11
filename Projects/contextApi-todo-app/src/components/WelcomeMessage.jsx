import {TodoItemsContex} from '../store/todo-items-store'
import { useContext } from 'react';
const welcomeMessage = () =>{
  
    
  const contexObj = useContext(TodoItemsContex)
  const todoItems= contexObj.todoItems
 return (
  todoItems.length === 0 && <p >Enjoy your Day</p>
 )
};

export default welcomeMessage;