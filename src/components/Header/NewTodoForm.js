import React from 'react'
import {Form} from "formik"

import React from 'react'

function NewTodoForm() {
  return (
    <Form>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
  </Form>
  )
}

export default NewTodoForm