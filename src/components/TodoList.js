import React, { useState } from 'react';
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

function TodoList() {
const[todos,setTodos]=useState([]);

const addTodo=(todo)=>{

const newTodos=[todo, ...todos];

setTodos(newTodos);



}

// const deleteTodo=id=>{


// const deleteTodos=[...todos].filter(todo=>todo.id!==id);
// setTodos(deleteTodos);

// }



  return (
    <>

   <h1>Bugün için ne planlıyorsun?</h1>
   <TodoForm addTodo={addTodo} todos={todos}/>
 



    </>
  )
}

export default TodoList