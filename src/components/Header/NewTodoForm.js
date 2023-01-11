import React from 'react'
import {Form,Formik} from "formik";

function NewTodoForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
      
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
       <input className='new-todo' placeholder='What needs to be done?' autoFocus/>
       
      </Form>
    </Formik>
  )
}

export default NewTodoForm