import React from 'react'



const Todo = (props) => {
  return (
   <div>
     <ul>
    { props.todos.map((todo)=>

     <li key={todo.id}>
    <span>{todo.text}</span>
    <div className='icons'>
    
         <i  onClick={() => props.deleteTodo(todo.id)}className="material-icons" >cancel</i>
         
     
       </div>
     </li>
     
    )
  
    }
 
   </ul>
   </div>

  )
}

export default Todo