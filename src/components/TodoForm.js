import React, { useState } from 'react'



function TodoForm(props) {
    const [input,setInput]=useState("");


    const handleChange = e => {
      setInput(
    
      e.target.value
  
  );
      };

    const handleSubmit = e => {
        e.preventDefault();
    
        props.addTodo({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        
      
        setInput('');
        console.log(input);
      };

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input
      placeholder='Add a todo'
      value={input}
      onChange={handleChange}
      name='text'
      className='todo-input'
      
    
    />
    <button  className='todo-button'>
      Add todo
    </button>
    <ul>
        {  props.todos.map((todo)=>

         <li >
        <span>{todo.text}</span>
         </li>

        )
      
        }
     
       </ul>

    </form>
 
 
  </>
  )
}

export default TodoForm