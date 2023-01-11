import React from 'react'
import {Field, Form,Formik} from "formik";
import validations from './validations';

function NewTodoForm() {
  return (
    <Formik
      initialValues={{
        text: '',
      
      }}
      onSubmit={(values,bag) => {
       
        console.log(values);
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