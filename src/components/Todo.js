import React from 'react'



const Todo = (props) => {
  return (
   <div className='todo'>
     <ul>
    { props.todos.map((todo)=>

     <li  className='todo-item' key={todo.id}>
    <span className='todo-text'>{todo.text} <i  onClick={() => props.deleteTodo(todo.id)}className="material-icons" >cancel</i></span>

     </li>
     
    )
  
    }
 
   </ul>
   </div>

  )
}

export default Todo