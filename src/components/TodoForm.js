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
    <form onSubmit={handleSubmit} className="form">
    <input
      placeholder='Bugünki Planını Ekle :'
      value={input}
      onChange={handleChange}
      name='text'
      className='todo-input'
      
    
    />
    <button  className='todo-button'>
      Ekle
    </button>
   
    </form>
 
 
  </>
  )
}

export default TodoForm