import React from 'react'
import {Field, Form, Formik} from "formik"



function NewTodoForm() {
  return (
   <Formik>

   initialValues={{
    text:"",

  }}

   onSubmit={async(values)=>{
    
    await new Promise((r)=>setTimeout(r,500));
    alert(JSON.stringify(values,null,2));

    }}


  <Form>
    <Field className="new-todo" placeholder="What needs to be done?" autoFocus id="text" name="text" />
  </Form>

   </Formik>
  )
}

export default NewTodoForm