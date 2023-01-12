import React from 'react'
import {Field, Form,Formik} from "formik";
import validations from './validations';
import { useTodo } from '../../../contexts/TodoContext';


function NewTodoForm() {

  const{addTodo}=useTodo();


  return (
    <Formik
      initialValues={{
        text: '',
      
      }}
      onSubmit={(values,bag) => {
       
        console.log(values);

       addTodo(values.text)
        bag.resetForm();
      }}

      validationSchema={validations}


    >
      <Form>
       <Field className='new-todo' placeholder='What needs to be done?' id="text" name="text" autoFocus/>
       
      </Form>
    </Formik>
  )
}

export default NewTodoForm